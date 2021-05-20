const axios = require("axios");
const API_BASE = "https://api.covid19api.com";

const instance = axios.create({
    baseURL: API_BASE,
});

const getCountries = () => instance.get("/countries");
const getCountryData = (country, params = {}) =>
    instance.get(`/total/country/${country}`, {params});

module.exports = { getCountries, getCountryData };
