const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

console.log(`Setting up a ${waitTime / 1000}s delay`);

const incTime = () => {
    currentTime += waitInterval;
    console.log(`Waiting for ${currentTime / 1000}s`);
}

const greet = () => {
    console.log("Hi! happy coding");
    clearInterval(timer);
}

const timer = setInterval(incTime, waitInterval);

setTimeout(greet, waitTime);