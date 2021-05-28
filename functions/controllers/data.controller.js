const { default: countryModel } = require("../models/country.model");
const { default: DayData } = require("../models/daydata.model");
const { auth } = require("../services/auth.service");

exports.getDataByCountry = async (req, res) => {
  let tokenId = req.headers.authorization;
  let user = await auth(tokenId);

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
