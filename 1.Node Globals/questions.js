const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n${questions[i]}`);
    process.stdout.write(" > ");
}

ask();
const answers = [];
process.stdin.on("data", data => {
    const srtData = data.toString().trim();
    if(srtData !== '') {
        answers.push(srtData);
    }

    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on("exit", () => {
    const [name, activity, lang] = answers;
    
    console.log("\n\nThank you for your answers.\n");
    console.log(`${name} go ${activity}. You can code with ${lang} later. :D`);
})
