const { assert } = require("chai");
const moment = require("moment")
const uri = (dbname) =>
    `mongodb+srv://User:1234@clustercorona.32baq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// DB connection
require("../conf/db.conf").default(uri("testcoviddata"));

describe("", () => {
    it("", () => {
        let date = moment();
        let datenow = moment().startOf("day").add(1,"hours")
        while (
            !date.isSame(datenow, "hour")
        ) {
            date.add(1, "second");
        }
        assert(
            date.isSame(moment().startOf("day").add(1, "hours"), "hour")
        );
    });
});
