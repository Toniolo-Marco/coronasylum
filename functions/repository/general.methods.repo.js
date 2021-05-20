const { default: Country } = require("../models/country.model");
const dayDataRepo = require("./daydata.repo");
const mongoose = require("mongoose");

// @transactional
const updateCountry = async (data, country) =>
    mongoose.connection.transaction(() =>
        Promise.all([
            dayDataRepo.updateMany(data),
            Country.updateOne({ Slug: country.Slug }, country, {
                upsert: true,
            }),
        ])
    );

module.exports = { updateCountry };
