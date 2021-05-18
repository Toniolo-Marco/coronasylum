const {default: dataTask} = require("../services/data.task.service");

const checkUpdates = (req,res) => {
    if(req.body && req.body.pwd === "1234") {
        dataTask.emit("start")
        res.status(200).send()
    } else {
        res.status(400).send()
    }
}

exports.checkUpdates = checkUpdates;