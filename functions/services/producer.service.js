const schedule = require("node-schedule");
const update = require("./update.service");
const { default: Country } = require("../models/country.model");
const { consumer } = require("./consumer.service");

const updateCountry = async (slug) => {
    try {
        let country = await Country.findOne(
            { Slug: slug },
            { Country: true, Slug: true, ISO2: true }
        ).exec();
        await update.runCountryTotalDump(country.toObject());
    } catch (err) {
        return false;
    }
};

const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 2;
rule.tz = 'Europe/Rome';

schedule.scheduleJob(rule, async function () {
    let countries = await Country.find({}).exec();
    countries.forEach((e) =>
        consumer.push({ args: e.Slug, func: updateCountry })
    );
});

exports.updateCountry = updateCountry;
