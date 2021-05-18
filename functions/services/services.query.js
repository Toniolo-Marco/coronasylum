const axios = require("axios");

function callAPI(o) {
  let str = "https://api.covid19api.com";

  if (o.country !== "world") {
    str = `${str}/${o.category}/country/${o.country}`;
  } else {
    str = `${str}/world`;
  }
  console.log(`console API country ${o.country}: ${str}`);
  return str;
}

exports.getData = async (query) => {
  return await axios
    .get(callAPI(query))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return [];
    });
};
