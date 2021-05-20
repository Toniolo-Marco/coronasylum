const moment = require("moment");
const sinon = require("sinon");
const { expect } = require("chai");
const {
    default: dataTaskService,
    startDate,
    getCountryData,
    getCountries,
} = require("../../services/data.task.service");
const { default: DayData } = require("../../models/daydata.model");

describe("test constructor of data task", () => {
    let dataTask = dataTaskService();
    it("check dates are the right number", () => {
        expect(dataTask.dates.length).to.equal(
            moment.utc().startOf("day").diff(startDate, "days") + 1
        );
        expect(dataTask.dates[dataTask.dates.length - 2]).to.equal(
            moment()
                .utc()
                .add(-1, "days")
                .startOf("day")
                .toISOString(false)
                .replace(".000", "")
        );
        dataTask.dates.every((el) => expect(el).to.match(/^2(.*)00:00:00Z$/));
    });
});

describe("test db data for a single country", () => {
    let dataTask = dataTaskService();
    let filter;
    before("stubs", () => {
        sinon.createSandbox();
        sinon.stub(dataTask, "runTask").withArgs().returns(console.log("here"));
    });
    beforeEach("clear tables", async () => {
        filter = await getCountries().then(
            (res) => res.data.filter((e) => e.Slug === "italy")[0]
        );
        await DayData.deleteMany({ Country: filter.Country }).exec();
    });
    after("restore stubs", () => {
        sinon.restore();
    });
    it("should obtain as much data as possible with 'getCountryData' on a given sample country", async () => {
        let today = moment.utc();
        let todayStart = today.startOf("day").toISOString(false);
        let todayEnd = today.endOf("day").toISOString(false);
        await DayData.countDocuments({ Country: filter.Country }, (_, _count) =>
            expect(_count).to.equal(0)
        ).exec();
        let areThereTodayData = await getCountryData(filter.Slug, {
            params: { from: todayStart, to: todayEnd },
        })
            .then((res) => res.data.length === 1)
            .catch(() => {
                throw new Error();
            });
        let count;
        let newData = await getCountryData(filter.Slug).then((res) => {
            if (areThereTodayData) count = dataTask.dates.length;
            else count = dataTask.dates.length - 1;

            expect(res.data.length).to.equal(count);
            return res.data;
        });
        await DayData.insertMany(newData);
        await DayData.countDocuments({ Country: filter.Country }, (_, _count) =>
            expect(_count).to.equal(count)
        ).exec();
    });
    it("test fullDump queue", (done) => {
        dataTask.runCountryTotalDump(filter).then(() =>
            DayData.countDocuments({ Country: filter.Country }, (_, _count) => {
                expect(_count).to.not.equal(0);
                done();
            })
        );
    });
});
