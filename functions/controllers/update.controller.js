const { default: Country } = require("../models/country.model");
const { default: dataTask } = require("../services/data.task.service");
const update = require("../services/update.service");
const { StatusCodes } = require("http-status-codes");

const checkUpdates = (req, res) => {
    if (req.body && req.body.pwd === "1234") {
        dataTask.emit("start");
        res.status(200).send();
    } else {
        res.status(400).send();
    }
};

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
        res.status(StatusCodes.BAD_REQUEST).send(err instanceof Error && err.message);
    }
};

exports.checkUpdates = checkUpdates;
exports.updateCountry = updateCountry;