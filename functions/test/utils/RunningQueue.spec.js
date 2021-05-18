const { default: RunningQueue } = require("../../utils/RunningQueue");
const { expect } = require("chai");

describe("attempt to push and on done verify length is zero", () => {
    let queue;
    let callback = (el) => {
        expect(el).to.have.property("property");
    };
    beforeEach("setup a new running queue", () => {
        queue = new RunningQueue(callback);
    });
    afterEach("assert zero length", () => {
        expect(queue.getSize()).to.equal(0);
    });
    it("should return zero length on done", (done) => {
        let removed = queue.push({ property: 1 });
        removed(() => {
            expect(queue.getSize()).to.equal(0);
            done();
        });
    });
    it("should return zero when all tasks are completed", (done) => {
        let empty = queue.getEmptyListener();
        empty(() => {
            done()
        })
        Array(100).fill(0).forEach((_,i) => queue.push({property: i}))
    });
});
