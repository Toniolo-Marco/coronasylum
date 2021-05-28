const { default: Country } = require("../models/country.model");
const { default: dataTask } = require("../services/data.task.service");
const update = require("../services/update.service");
const { StatusCodes } = require("http-status-codes");
const { consumer } = require("../services/consumer.service.js")
const { updateCountry: uc } = require("../services/producer.service.js")

const updateCountry = async (req, res) => {
    try {
        if (req.params && req.params.country) {
            let country = await Country.findOne(
                { Slug: req.params.country },
                { Country: true, Slug: true, ISO2: true }
            ).exec();
            update.runCountryTotalDump(country.toObject());
            res.status(StatusCodes.OK).send();
        } else {
            throw new Error("Params must contain a 'country' slug");
        }
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).send(
            err instanceof Error && err.message
        );
    }
};

const forceUpdate = async (_, res) => {
    let countries = await Country.find({}).exec();
    countries.forEach((e) =>
        consumer.push({ args: e.Slug, func: uc })
    );
    res.status(StatusCodes.OK).send();
};

exports.updateCountry = updateCountry;
exports.forceUpdate = forceUpdate;