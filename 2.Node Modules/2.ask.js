const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How are you? ", answer => {
    console.log(`Your answer: ${answer}`);
    process.exit();
});