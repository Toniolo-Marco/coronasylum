const queue = require("queue");
const query = require("./api.service");
const moment = require("moment");
const generalMethods = require("../repository/general.methods.repo");
const countryRepo = require("../repository/country.repo");
const daydataRepo = require("../repository/daydata.repo");

const q = queue({ results: [], timeout: 2000 });

const runCountryTotalDump = async (country) => {
    try {
        let { data } = await query.getCountryData(country.Slug);
        return generalMethods.updateCountry(data, country);
    } catch (err) {
        return Promise.reject(err);
    }
};

module.exports = { q, runCountryTotalDump };
