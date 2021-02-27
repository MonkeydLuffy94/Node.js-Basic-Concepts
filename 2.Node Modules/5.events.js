const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (msg, user) => {
    console.log(`${user}: ${msg}`);
})

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Mridul");