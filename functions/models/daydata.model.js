const mongoose = require("mongoose");
exports.default = mongoose.model(
    "DayData",
    mongoose.Schema(
        {
            Country: String,
            CountryCode: String,
            Province: String,
            City: String,
            CityCode: String,
            Lat: String,
            Long: String,
            Confirmed: Number,
            Deaths: Number,
            Recovered: Number,
            Active: Number,
            Date: Date,
        },
        { timestamps: true }
    )
);
