const functions = require("firebase-functions");
const express = require("express");
const { service } = require("firebase-functions/lib/providers/analytics");
const app = express();
const db = require("./models");
const uri = "mongodb+srv://User:1234@clustercorona.32baq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const cors = require("cors");
const { default: buildQuery, getData } = require("./services/services.query");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

db.mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");

  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/api",(req, res)=>{
    res.send("<h2>"+isConnected+"</h2>");
});
app.get("/api/data",(req, res)=>{
    console.log(req.path);
    console.log(req.query);
    console.log(getData(req.query));
    getData(req.query).then(r=>{res.send(r)});
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.app = functions.https.onRequest(app);

