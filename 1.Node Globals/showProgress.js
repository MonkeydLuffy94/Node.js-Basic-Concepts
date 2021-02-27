const waitTime = 50000;
const waitInterval = 500;
let currentTime = 0;

console.log(`Setting up a ${waitTime / 1000}s delay`);

const incTime = () => {
    currentTime += waitInterval;
    const progress = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${progress}% completed`);
}

const greet = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`100% completed. Happy coding`);
    clearInterval(timer);
}

const timer = setInterval(incTime, waitInterval);

setTimeout(greet, waitTime);