const fs = require("fs");

const writeStream = fs.createWriteStream("./3.1.writeInFromFile.md", "UTF-8");
const readStream = fs.createReadStream("./test.md", "UTF-8");

// //1.read data chunk from a file
// readStream.on("data", data => {

//     //2.write the same data chunk into another file
//     writeStream.write(data);
// })

//short form of above code
readStream.pipe(writeStream);