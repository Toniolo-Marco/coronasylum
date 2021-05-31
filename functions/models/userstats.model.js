const mongoose = require("mongoose");
exports.default = mongoose.model(
  "UserStats",
  mongoose.Schema(
    {
      clientIp: String,
      mail: String,
      browser: String,
      imageurl: String,
      nickname: String,
      username: String,
      country: String,
    },
    { timestamps: true }
  )
);
