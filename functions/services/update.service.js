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

const runCountryDataUpdate = async (country) => {
    try {
        let c = await countryRepo.findBySlug(country.Slug);
        let lastUpdated = moment(c.lastUpdated).utc();
        let yesterday = moment.utc().add(-1,"days").startOf("day");
        if(lastUpdated.isBefore(yesterday)) {
            let d = await daydataRepo.findMostRecentByCountry(c.Country)
            // compute days to update
        }
        return Promise.resolve(0);
    } catch (err) {
        return Promise.reject();
    }
}

module.exports = { q, runCountryTotalDump, runCountryDataUpdate };
