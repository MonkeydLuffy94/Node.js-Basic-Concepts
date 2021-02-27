const fs = require("fs");

const dirName = "Created With Node";

//check if "dirName" exists. Else create a new one
if(!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}

const fileName = "text.txt";

// create a new file "test.txt"
fs.writeFile(`./${dirName}/${fileName}`, "This is a test file", err => {
    if(!err) {
        console.log(`Please wait for 5s to see file name change in \"${dirName}\".\n`);
        // change file name after 5s
        setTimeout(() => {
            fs.renameSync(`./${dirName}/${fileName}`, `./${dirName}/renamedTest.txt`);
        }, 5000)
    } else {
        console.log(err.message);
    }
});

//Note : use "rename" method to change directory as well | also you can use the same method to -> rename and change 