const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const defaultDone = () => process.exit();

const collectAnswers = (questions, done = defaultDone) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    //if answers is empty don't strore
    answer.trim() !== "" ? answers.push(answer) : null;

    //if answers are less than questions ask again
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  //ask first question
  rl.question(firstQuestion, questionAnswered);
};

module.exports = {
  collectAnswers,
};
