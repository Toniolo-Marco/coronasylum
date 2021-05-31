const { default: countryModel } = require("../models/country.model");
const { default: DayData } = require("../models/daydata.model");
const { default: UserStats } = require("../models/userstats.model");

const { auth } = require("../services/auth.service");

exports.getDataByCountry = async (req, res) => {
  let profile = {};
  let extra = {};
  if (req.headers.profile) {
    profile = JSON.parse(req.headers.profile);
    extra.imageurl = profile.profile.imageUrl;
    extra.mail = profile.profile.email;
    extra.nickname = profile.profile.givenName;
    extra.username = profile.profile.name;
  }

  let userStat = await new UserStats({
    clientIp: req.headers.clientip,
    browser: req.headers.browser,
    country: req.params.country,
    ...extra,
  }).save();
  let tokenId = req.headers.authorization;
  let user = tokenId && (await auth(tokenId));
  console.log(req.headers);

  if (req.params.country !== "italy" && (tokenId === undefined || !user)) {
    //ERRORE
    res.status(401).send("No user");
  } else {
    countryModel.findOne({ Slug: req.params.country }).then((countryspec) => {
      DayData.find({
        $and: [
          { Date: { $not: { $eq: "2021-03-07T00:00:00.000+00:00" } } },
          { Country: countryspec.Country },
        ],
      })
        .sort({ Date: 1 })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(400).send();
        });
    });
  }
};
