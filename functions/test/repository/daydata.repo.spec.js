const sinon = require("sinon");
const { default: Country } = require("../../models/country.model");
const { default: DayData } = require("../../models/daydata.model");
const api = require("../../services/api.service");
const update = require("../../services/update.service");
const dayDataRepo = require("../../repository/daydata.repo");
const { expect } = require("chai");

describe("test multiple forced update", () => {
    let country;
    beforeEach("", async () => {
        country = new Country({
            Country: "Italy",
            Slug: "italy",
            ISO2: "IT",
        });
        sinon.createSandbox();
        await DayData.deleteMany({ Country: country.Country }).exec();
        await Country.deleteMany({ Slug: country.Slug }).exec();
    });
    afterEach("", () => {
        sinon.restore();
    });
    it("", async () => {
        let res = await api.getCountryData(country.Slug);
        sinon.stub(api, "getCountryData").resolves(res);

        await update.runCountryTotalDump(country);
        let bulkOps = await dayDataRepo.updateMany(res.data);
        expect(bulkOps.matchedCount).to.be.lessThanOrEqual(bulkOps.modifiedCount);
    });
    it("asd", async () => {
        let { data } = await api.getCountryData(country.Slug);
        let bulkOps = await dayDataRepo.updateMany(data);
        expect(data.length).to.be.lessThanOrEqual(bulkOps.upsertedCount);
    });
});
