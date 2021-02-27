// modules that comes with node, no need to install with npm
const path = require("path");
const util = require("util");
const v8 = require("v8");

//gives full path upto uploads... ../testFolder/www/files/uploads created for testing
const dirUploads = path.join(__dirname, "testFolder", "www", "files", "uploads");
console.log(`${dirUploads}\n\n.....................\n\n`);

//util logs are much powerful than console.log...comes with timestamp
// util log is deprecated use 3rd party app

const currentFile = path.basename(__filename);
util.log(`The name of the current file is ${currentFile}\n\n.....................\n\n`);

//gives memory stat
util.log(v8.getHeapStatistics());