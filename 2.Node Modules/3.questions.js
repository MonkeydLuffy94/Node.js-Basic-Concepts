const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are are you going to do with node js? "
];

collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        //if answers is empty don't strore
        answer.trim() !== ''? answers.push(answer) : null; 

        //if answers are less than questions ask again
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else{
             done(answers);
        }
    }

    //ask first question
    rl.question(firstQuestion, questionAnswered);
}

collectAnswers(questions, answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
    process.exit();
});