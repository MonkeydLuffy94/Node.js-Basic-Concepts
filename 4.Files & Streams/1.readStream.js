const fs = require("fs");

const readStream = fs.createReadStream("./test.md", "UTF-8");

//read data chunk by chunk using readStream | asynchronous function
readStream.on("data", (data) => {
  console.log(`I read ${data.length} characters.`);
});

//show first chunk of data for only once
readStream.once("data", (data) => {
  console.log(data);
});

//give a message after the reading ended
readStream.once("end", () => {
  console.log("File reading finished...");
});
