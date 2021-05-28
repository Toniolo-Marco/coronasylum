const { assert } = require("chai");
const moment = require("moment");
const uri = (dbname) =>
    `mongodb+srv://User:1234@clustercorona.32baq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// DB connection
require("../conf/db.conf").default(uri("testcoviddata"));

describe("check proper scheduling", () => {
    it("should run once", () => {
        let counter = 0;
        let now = new Date();
        for(let i = 0; i < 24; i++) {
            if(now.getHours() === 0) {
                ++counter;
            }
            now.setHours(i);
        }
        assert(counter === 1)
    });
});
