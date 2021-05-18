const { EventEmitter } = require("events");
const { v4 } = require("uuid");
class RunningQueue extends EventEmitter {
    constructor(cb) {
        super();
        this.queue = new Map();
        this.notDone = new Set();
        this.listeners = [
            this.on("pushed", async (el, done) => {
                let res = await cb(el);
                done();
                return res;
            }),
            this.on("done", (id) => this.remove(id)),
        ];
    }
    getSize() {
        return this.queue.size;
    }
    push(el) {
        let id = v4();
        this.queue.set(id, el);
        this.notDone.add(id);
        const done = () => {
            if (this.notDone.has(id)) {
                this.notDone.delete(id);
                this.emit("done", id);
            }
        };
        setImmediate(() => this.emit("pushed", el, done));
        return (cb) => this.on("removed",cb);
    }
    remove(id) {
        this.queue.delete(id);
        if(this.queue.size === 0) {
            setImmediate(() => this.emit("empty"));
        }
        this.emit("removed",id);
    }
    getEmptyListener() {
        return (cb) => this.on("empty",cb);
    }
}

exports.default = RunningQueue;
