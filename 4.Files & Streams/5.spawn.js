const cp = require("child_process");

const questionApp = cp.spawn("node", ["../Node Modules/3.questions.js"]);

questionApp.stdin.write("Mridul\n");
questionApp.stdin.write("Chinsurah\n");
questionApp.stdin.write("Change the world\n");


questionApp.stdout.on("data", (data) => {
  console.log(`From the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log("Question process exited.");
});
