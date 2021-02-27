// to run any command in current os command line args | example: ls, cd, etc
const cp = require("child_process");

//list all files in current directory
cp.exec("ls", (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.log(err.message);
  }
});
