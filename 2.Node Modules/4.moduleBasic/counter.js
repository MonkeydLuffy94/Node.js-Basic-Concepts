let counter = 0;

const increment = () => counter++;

const decrement = () => counter--;

const getCount = () => counter;

const setCount = (num) => counter = num;



module.exports = {
    increment,
    decrement,
    getCount, 
    setCount
};