require("dotenv").config();
const { auth } = require("./controllers/auth.controller");
const { getDataByCountry } = require("./controllers/data.controller");
// Firebase middleware
const functions = require("firebase-functions");

const uri = (dbname) =>
  `mongodb+srv://User:1234@clustercorona.32baq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// DB connection
require("./conf/db.conf").default(uri("coviddata"));

// Application
const corsOptions = {
  origin: [/http:\/\/localhost(?::\d{1,5})?/],
};
const express = require("express");
const app = express();
const cors = require("cors");
const {
  checkUpdates,
  updateCountry,
} = require("./controllers/update.controller");
app.use(cors(corsOptions));
app.use(express.json());
app.get("/api/total/country/:country", getDataByCountry);
app.get("/api/update/:country", updateCountry);
app.post("/api/update", checkUpdates);
app.post("/api/auth", auth);

const { default: buildQuery, getData } = require("./services/api.service");

exports.app = functions.https.onRequest(app);
