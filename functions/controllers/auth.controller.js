const User = require("../models/user.model");
// const bcrypt = require("bcryptjs");
// exports.singin = (req, res) => {
//   User.findOne({
//     email: req.body.email,
//   }).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//     if (!user) {
//       return res.status(404).send({ message: "User Not Found." });
//     }

//     var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

//     if (!passwordIsValid) {
//       return res.status(401).send({
//         accessToken: null,
//         message: "Invalid Password!",
//       });
//     }

//     var token = jwt.sign({ id: user.id }, config.secret, {
//       expiseIn: 86400,
//     });

//     res.status(200).send({
//       id: user._id,
//       email: user.email,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       accessToken: token,
//     });
//   });
// };

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
