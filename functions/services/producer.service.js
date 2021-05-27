const moment = require("moment");
const update = require("./update.service");
const { default: Country } = require("../models/country.model");
const consumer = require("./consumer.service");

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

setInterval(async () => {
    let now = new Date();
    if (now.getHours() === 2) {
        let countries = await Country.find({}).exec();
        countries.forEach((e) =>
            consumer.queue.push({ args: e.slug, func: updateCountry })
        );
    }
}, 3_600_000);

exports.updateCountry = updateCountry;
