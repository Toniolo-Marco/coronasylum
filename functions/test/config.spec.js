const uri = (dbname) =>
    `mongodb+srv://User:1234@clustercorona.32baq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// DB connection
require("../conf/db.conf").default(uri("testcoviddata"));