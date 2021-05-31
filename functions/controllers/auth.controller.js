exports.auth = (req, res) => {
  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(process.env.CLIENT_ID);

  const token = req.body.accessToken;
  const ticket = client
    .verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    })
    .then((user) => {
      if (user.getPayload().email_verified) {
        res
          .status(200)
          .send({ message: "successful", payload: user.getPayload() });
      } else {
        res.status(401).send({ message: "email not verified" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send({ message: "unauthorized" });
    });
};
