require("dotenv").config();
const { auth } = require("./controllers/auth.controller");
const { getDataByCountry } = require("./controllers/data.controller");
// Firebase middleware
const functions = require("firebase-functions");

const uri = (dbname) =>
  `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@clustercorona.32baq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// DB connection
require("./conf/db.conf").default(uri("coviddata"));

// Application
const corsOptions = {
  origin: [
    /http:\/\/localhost(?::\d{1,5})?/,
    /https:\/\/coronasylum-29bad.web.app/,
  ],
};
const express = require("express");
const app = express();
const cors = require("cors");
const {
  updateCountry,
  forceUpdate,
} = require("./controllers/update.controller");
app.use(cors(corsOptions));
app.use(express.json());
app.get("/api/total/country/:country", getDataByCountry);
app.get("/api/update/:country", updateCountry);
app.get("/api/update", forceUpdate);

require("./services/api.service");

require("./services/consumer.service");
require("./services/producer.service");

exports.app = functions.https.onRequest(app);
