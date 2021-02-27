// Read content of a file | using readFile() or readFileSync()
const fs = require("fs");

//get whole text content of the file "mridul.txt" located at "./assets" | Asynchronous method

fs.readFile("./assets/mridul.txt", "UTF-8", (err, text) => {
  if (!err) {
    console.log("Text content in mridul.txt is:\n\n" + text);
  } else {
    console.log(err);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////

//get whole text content of the file "mridul.txt" located at "./assets" | synchronous method
const text = fs.readFileSync("./assets/mridul.txt", "UTF-8");

console.log(text + "\n\n");

/////////////////////////////////////////////////////////////////////////////////////////////
