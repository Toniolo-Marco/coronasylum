const { EventEmitter } = require("events");
const moment = require("moment");

class QueueConsumer extends EventEmitter {
    constructor() {
        super();
        this.clock = setInterval(() => this.emit("tick", moment.utc()), 3000);
        this.queue = [];
        this.on("tick", () => {
            if (this.queue.length !== 0) {
                let { args, func } = this.queue[0];
                console.log(`running args ${args}`);
                this.queue = this.queue.slice(1);
                func(args) ? console.log(`${args} OK`) : console.log(`${args} KO!!`);
            }
        });
    }
    push(obj) {
        this.queue.push(obj);
        this.emit("added");
    }
}

const consumer = new QueueConsumer();
module.exports = { consumer };
