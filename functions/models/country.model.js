const mongoose = require("mongoose");

exports.default = mongoose.model(
    "Country",
    mongoose.Schema(
        {
            Country: {
                type: String,
            },
            Slug: {
                type: String,
                unique: true,
                required: true,
            },
            ISO2: {
                type: String,
            },
        },
        {
            timestamps: true,
            toObject: {
                transform: function (_, ret) {
                    delete ret._id;
                },
            },
        }
    )
);
