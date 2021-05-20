const { expect, assert } = require("chai");
const moment = require("moment");
const {adjustISOtoAPI} = require("../../utils/date.utils");

describe("given moment check corresponding ISO string",() => {
    it("should return ISOs always at UTC time", () => {
        expect(adjustISOtoAPI(moment())).to.be.a("string").and.satisfy(str => str.endsWith("Z"))
    })
    it("should not have milliseconds", () => {
        expect(adjustISOtoAPI(moment())).to.be.a("string").and.not.match(/\.[0-9]{3}/);
    })
})

describe("check dates are brought to UTC before start of day", () => {
    it("should return a UTC start of day despite initial time zone", () => {
        let t = moment();
        assert(moment(t).startOf("day").isBefore(moment(t).utc().startOf("day")),"UTC correction")
    })
})