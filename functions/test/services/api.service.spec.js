const { expect } = require("chai");
const moment = require("moment");
const { StatusCodes } = require("http-status-codes");
const api = require("../../services/api.service");
const { adjustISOtoAPI } = require("../../utils/date.utils");

describe("test api gets", () => {
    const TOTAL_COUNTRIES = 248;
    beforeEach("delay one second to be sure API replies", (done) => {
        setTimeout(() => done(),1000)
    })
    it("should return 200 and yesterday's single record", async () => {
        const slug = "italy";
        const yesterday = moment.utc().add(-1, "days").startOf("day");
        let params = {
            from: adjustISOtoAPI(moment(yesterday)),
            to: adjustISOtoAPI(moment(yesterday).endOf("day")),
        };
        let res = await api.getCountryData(slug, params);
        expect(res.status).to.equal(StatusCodes.OK);
        expect(res.data).to.have.lengthOf(1);
    });
    it("should return 200 and no record at all record", async () => {
        const slug = "ala-aland-islands";
        let res = await api.getCountryData(slug);
        expect(res.status).to.equal(StatusCodes.OK);
        expect(res.data).to.have.lengthOf(0);
    });
    it(`should return the list of all countries (atm ${TOTAL_COUNTRIES}) fitting the 'Country' model`,async () => {
        let res = await api.getCountries();
        expect(res.status).to.equal(StatusCodes.OK);
        let data = res.data;
        expect(data).to.have.lengthOf(TOTAL_COUNTRIES);
        data.every(el => expect(el).to.hasOwnProperty("Slug"))
    })
});
