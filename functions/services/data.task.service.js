const mongoose = require("mongoose");
const axios = require("axios");
const { EventEmitter } = require("events");
const Country = require("../models/country.model").default;
const DayData = require("../models/daydata.model").default;
const moment = require("moment");
const { default: RunningQueue } = require("../utils/RunningQueue");

const API_BASE = "https://api.covid19api.com";

const getCountries = () => axios.get("/countries", { baseURL: API_BASE });
const getCountryData = (country, opts = {}) =>
  axios.get(`/total/country/${country}`, { baseURL: API_BASE, ...opts });

const startDate = moment.utc("2020-01-22");

const fillDates = () => {
  let dates = [];
  let current = moment(startDate);
  while (current.isBefore(moment.utc().startOf("day").add(1, "days"))) {
    dates.push(current.toISOString(false).replace(".000", ""));
    current.add(1, "days");
  }
  return dates;
};

const checkAndUpdate = (res) => {
  let newData = [];
  if (res.data) {
    newData = res.data.filter((d) =>
      moment(d.Date).isSameOrAfter(moment(start))
    );
  }
  newData.length !== 0 && DayData.insertMany(newData);
  Country.findOneAndUpdate(
    { Slug: country.Slug },
    { Country: country.Country }
  );
};

class DataTask extends EventEmitter {
  //static dates = fillDates();
  constructor() {
    super();
    this.fullDumps = new RunningQueue((el) =>
      this.runCountryTotalDump(el, this)
    );
    this.cherryPickDumps = new RunningQueue((el) =>
      this.runCountryTask(el, this)
    );
    this.listeners = [
      this.on("errorCountry", () => console.log("error country update")),
      this.on(
        "rescheduleCherryPickDump",
        (_, country, count) =>
          count <= 4 && this.runCountryTask(country, this, true, count)
      ),
      this.on(
        "rescheduleFullDump",
        (_, country, count) =>
          count <= 4 && this.runCountryTotalDump(country, this, true, count)
      ),
      this.on("start", () => this.runTask()),
    ];
  }
  async runTask() {
    const res = await getCountries();
    // check if there are countries
    res.data &&
      Country.find({}, async (_1, r) => {
        if (r) {
          let countries = r.map((el) => el.toObject().Slug);
          res.data.forEach((el) => {
            if (countries.includes(el.Slug)) {
              this.cherryPickDumps.push(el);
            } else {
              this.fullDumps.push(el);
            }
          });
        }
      });
  }
  async runCountryTask(country, self, rescheduled, count = 0) {
    if (rescheduled) {
      count++;
      console.log(`Reschedule ${country.Country} for the ${count}th time`);
    }
    // first check DB and get all missing dates
    DayData.findOne({ Country: country.Country }, {}, { sort: { Date: -1 } })
      .exec()
      .then(async (dbdata) => {
        let today = moment
          .utc()
          .endOf("day")
          .set("millisecond", 0)
          .toISOString(false);
        let start;

        if (dbdata === null) {
          start = await Country.findOne({
            Slug: country.Slug,
          }).then((c) =>
            moment(c.updatedAt).utcOffset(0).startOf("day").toISOString(false)
          );
        } else {
          start = moment(dbdata.Date)
            .add(1, "days")
            .startOf("day")
            .toISOString(false);
        }
        getCountryData(country.Slug, {
          params: { from: start, to: today },
        })
          .then(checkAndUpdate)
          .catch((err) =>
            self.emit("rescheduleCherryPickDump", err, country, count)
          );
      });
  }
  async runCountryTotalDump(country, self, rescheduled = false, count = 0) {
    if (rescheduled) {
      count++;
    }
    await getCountryData(country.Slug)
      .then(async (res) => {
        if (res.data) {
          await DayData.insertMany(res.data).catch((err) =>
            self.emit("rescheduleCherryPickDump", err, country)
          );
          Country.create(country);
        } else throw new Error("No data contained in successful response");
      })
      .catch((err) => self.emit("rescheduleFullDump", err, country, count));
  }
}
let dataTask = new DataTask();
exports.default = dataTask;
exports.startDate = startDate;
exports.getCountryData = getCountryData;
exports.getCountries = getCountries;
