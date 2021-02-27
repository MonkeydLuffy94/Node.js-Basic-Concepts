// Read content of a file | using readFile() or readFileSync()
const fs = require("fs");

/** get whole text content of the file "mridul.txt" located at "./assets" | Asynchronous method
* change file to see update
* to read binary format remove character encoding parameter
**/

fs.readFile("./assets/Mridul-Dey.jpg", (err, img) => {
  if (!err) {
    console.log("Text content in Mridul-Dey.jpg is:\n\n");
  } else {
    console.log(err);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////
