const fs = require("fs");

const writeStream = fs.createWriteStream("./2.1.writeInFromConsole.md", "UTF-8");

// //1.take user input from console
// process.stdin.on("data", data => {
    
//     //2.write the data taken as user input to writeInFromConsole.md file 
//     writeStream.write(data);
// })

//short form of above code
process.stdin.pipe(writeStream);