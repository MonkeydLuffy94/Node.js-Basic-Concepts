// read folders of a file | both synchronous and asynchronous method | readdirSync() & readdir()
const fs = require("fs");

//read files asynchronously | result should be seen after synchronous file read

fs.readdir("./assets", (err, list) => {
  if (!err) {
    console.log("From asynchronous file read: ", list);
  } else {
    console.log(err.message);
  }
});

//////////////////////////////////////////////////////////////////

//read files synchronously

const filelist1 = fs.readdirSync("./assets");

console.log(filelist1);
/////////////////////////////////////////////////////////////////