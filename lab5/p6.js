const EventEmitter = require("events");

// Create instance
const emitter = new EventEmitter();

// Register "greet" event
emitter.on("greet", () => {
    console.log("Hello! The 'greet' event was triggered.");
});

// Fire the event manually
emitter.emit("greet");
