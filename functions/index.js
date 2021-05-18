// Firebase middleware
const functions = require("firebase-functions");

const uri = (dbname) =>
    `mongodb+srv://User:1234@clustercorona.32baq.mongodb.net/${dbname}?retryWrites=true&w=majority`;
// data fetch background task
const {default: dataTask} = require("./services/data.task.service");

// DB connection
require("./conf/db.conf").default(uri("coviddata"));

// Application
const corsOptions = {
    origin: [/http:\/\/localhost(?::\d{1,5})?/],
};
const express = require("express");
const app = express();
const cors = require("cors");
const { checkUpdates } = require("./controllers/check.controller");
app.use(cors(corsOptions));
app.use(express.json());
app.get("/api/data", (req, res) => {
    console.log(req.path);
    console.log(req.query);
    console.log(getData(req.query));
    getData(req.query).then((r) => {
        res.send(r);
    });
});
app.post("/api/update", checkUpdates)

const { default: buildQuery, getData } = require("./services/services.query");
exports.app = functions.https.onRequest(app);
