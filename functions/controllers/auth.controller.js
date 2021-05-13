const User = require("../models/user.model")
const bcrypt = require("bcryptjs");
exports.singin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .exec((err, user) =>{
        if(err){
            res.status(500).send({message: err});
            return;
        }
        if(!user){
            return res.status(404).send({ message: "User Not Found."});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
          );
    
          if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiseIn: 86400
        });

        res.status(200).send({
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            accessToken: token
        })
    })
}