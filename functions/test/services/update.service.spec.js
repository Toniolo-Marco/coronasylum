const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const chaiDatetime = require("chai-datetime");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiDatetime);
const expect = chai.expect;

const query = require("../../services/api.service");
const { default: DayData } = require("../../models/daydata.model");

const update = require("../../services/update.service");
const api = require("../../services/api.service");
const generalMethods = require("../../repository/general.methods.repo");
const { default: Country } = require("../../models/country.model");

describe("test jobs to run", () => {
    describe("no api requests, no DB", () => {
        let getCountryDataStub;
        beforeEach("sandbox setup", () => {
            sinon.createSandbox();
            getCountryDataStub = sinon.stub(query, "getCountryData");
        });
        afterEach("release sandbox", () => {
            sinon.restore();
        });
        it("should reject the promise on a rejected promise by the api", (done) => {
            getCountryDataStub.rejects(new Error("stubbed error"));
            update.runCountryTotalDump({}).catch((err) => {
                getCountryDataStub.should.have.been.calledWith(undefined);
                expect(err).to.have.property("message", "stubbed error");
                done();
            });
        });
    });
    describe("yes api requests, no DB", () => {
        let updateCountryStub;
        let getCountryDataSpy;
        let country;
        beforeEach("sandbox setup", (done) => {
            sinon.createSandbox();
            updateCountryStub = sinon
                .stub(generalMethods, "updateCountry")
                .resolves();
            getCountryDataSpy = sinon.spy(api, "getCountryData");
            country = new Country({
                Country: "Italy",
                Slug: "italy",
                ISO2: "IT",
            });
            setTimeout(() => done(), 1000);
        });
        afterEach("release sandbox", () => {
            sinon.restore();
        });
        it("should reject the promise on a rejected promise by the api", (done) => {
            update
                .runCountryTotalDump({ Slug: "no-country-for-old-man" })
                .catch((err) => {
                    expect(err).to.have.property(
                        "message",
                        "Request failed with status code 404"
                    );
                })
                .finally(done);
        });
        it("should return a resolved promise", async () => {
            await update
                .runCountryTotalDump(country.toObject())
                .then(async (d) => {
                    let { data } = await getCountryDataSpy.getCall(0)
                        .returnValue;
                    updateCountryStub.should.have.been.calledWith(
                        data,
                        sinon.match.any
                    );
                    expect(d).to.be.undefined;
                });
        });
    });
    describe("both api and db", () => {
        let country = new Country({
            Slug: "italy",
            Country: "Italy",
            ISO2: "IT",
        });
        let getCountryDataSpy;
        beforeEach("db clean up", async () => {
            sinon.createSandbox();
            getCountryDataSpy = sinon.spy(api, "getCountryData");
            await DayData.deleteMany({ Country: country.Country }).exec();
            await Country.deleteMany({ Slug: country.Slug }).exec();
        });
        afterEach("destroy sandbox", () => {
            sinon.restore();
        });
        it("should create a new country and insert all relative data, when country exists shouldn't do another insert", async () => {
            await update.runCountryTotalDump(country);
            let { data } = await getCountryDataSpy.getCall(0).returnValue;
            let count = data.length;
            await DayData.countDocuments(
                { Country: country.Country },
                (_, _count) => {
                    expect(_count).to.equal(count);
                }
            ).exec();
            let lastUpdated;
            await Country.find({ Slug: country.Slug }, (_, _data) => {
                expect(_data).to.have.lengthOf(1);
                lastUpdated = _data[0].updatedAt;
            }).exec();

            await DayData.deleteMany({ Country: country.Country }).exec();
            await update.runCountryTotalDump(country);
            await DayData.countDocuments(
                { Country: country.Country },
                (_, _count) => {
                    expect(_count).to.equal(count);
                }
            ).exec();
            await Country.findOne({ Slug: country.Slug }, (_, c) => {
                expect(c.updatedAt).to.be.afterTime(lastUpdated);
            }).exec();
        });
        it("should update only if last update was before yesterday", async () => {
            await update.runCountryTotalDump(country);

            let addedRows = await update.runCountryDataUpdate(country);
            expect(addedRows).to.equal(0);
        })
    });
});
