/**
 * This is a modulerised version of "Node Module/3.questions.js" for practice
 */

const {collectAnswers } = require("./questionHandler");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are are you going to do with node js? ",
];

// collectAnswers(questions, (answers) => {
//   console.log("Thank you for your answers.");
//   console.log(answers);
//   process.exit();
// });

// in case we need the callback differently we added a default callback in qurestionHandler.js done
collectAnswers(questions);