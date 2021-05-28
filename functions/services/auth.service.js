const CLIENT_ID = process.env.CLIENT_ID;
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

exports.auth = async function (token) {
  return client
    .verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
