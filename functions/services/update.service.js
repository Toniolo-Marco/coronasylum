const queue = require("queue");
const query = require("./api.service");
const generalMethods = require("../repository/general.methods.repo");

const q = queue({ results: [], timeout: 2000 });

const runCountryTotalDump = async (country) => {
    try {
        let { data } = await query.getCountryData(country.Slug);
        return generalMethods.updateCountry(data, country);
    } catch (err) {
        console.log(new Error(`Cannot download data for ${country.Slug}`));
        return Promise.reject(err);
    }
};

module.exports = { q, runCountryTotalDump };
