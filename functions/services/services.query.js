const axios = require("axios");

function callAPI(o) {
  let str = "https://api.covid19api.com";

  if (o.country !== "world") {
    str = `${str}+${o.category}/country/${o.slug}`;
  } else {
    str = `${str}/world`;
  }
  return str;
}

exports.getData = async (query) => {
  console.log(query);
  const response = await axios.get(callAPI(query)).then((res) => {
    return res.data;
  });
  return response;
};
