const query = require("./api.service");
const generalMethods = require("../repository/general.methods.repo");

const runCountryTotalDump = async (country) => {
  try {
    let { data } = await query.getCountryData(country.Slug);
    return generalMethods.updateCountry(data, country);
  } catch (err) {
    console.log(new Error(`Cannot download data for ${country.Slug}`));
    return Promise.reject(err);
  }
};

module.exports = { runCountryTotalDump };
