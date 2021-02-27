const path = require('path');

console.log("\nWorking with node global objects\n..................\n");

console.log("Directory name: ", __dirname);
console.log("Full path of this file: ", __filename);

console.log("......................\n");

console.log("Only this file name: ", path.basename(__filename));


