const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (user, msg) => {
    console.log(`${user}: ${msg}`);
})

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Mridul");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input == "exit" || input == "Exit") {
        emitter.emit("customEvent", "process", "Good Bye!");
        process.exit();
    }
    emitter.emit("customEvent", "Terminal", input)
})