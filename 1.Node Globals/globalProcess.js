console.log(
  "Process object let us give useful information of the environment like process id, version used or env variables etc from terminal before starting an application."
);

console.log("Try adding some arguments after | node filename | 1. example: node globalProcess Mridul Dey");
console.log("or try adding this command 2. | node globalProcess --user Mridul --greeting \"Hi there\"" );

console.log(process.argv);

/**
 * try to extract the data you have added in the command line.
 * Note: argv is returning an array, try destructuring it ;)
 */
// add command node globalProcess --u "Mridul Dey" --greet "Hi There!"

console.log("Let's do it");

const grab = flag => {
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const username = grab("--u");
const greet = grab("--greet");

console.log(greet + " " + username);