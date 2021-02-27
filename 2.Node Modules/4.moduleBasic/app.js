const name = require("./myModule");

const {increment, decrement, getCount, setCount} = require("./counter");

console.log(`\nHi there! ${name}. Welcome to your new app.\n\n`);

while(getCount() <= 100) {
    console.log(`Counter value: ${getCount()}`);
    setCount(increment() * decrement() + 1);  // just to use all the function, no specific logic
}

