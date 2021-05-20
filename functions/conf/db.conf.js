const mongoose = require("mongoose");

mongoose.connection.once("open", () => console.log(`Connected to MongoDB`));
// DB Connection

exports.default = (url) => mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10,
        useFindAndModify: false
})

