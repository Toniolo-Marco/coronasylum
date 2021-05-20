const { default: Country } = require("../models/country.model");
const mongoose = require("mongoose");

const findBySlug = (Slug) => Country.findOne({Slug}).exec();

module.exports = { findBySlug }