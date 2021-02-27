//example of deleting file and folder/directory

const fs = require("fs");

//check if "dirName" exist and if not creat a new one
const dirName = "Test Files With Node";
if(!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}

//create a new file if already not present
fs.writeFile(`./${dirName}/xyz.txt`, "A arbitrary new file created by node", err => {
    if(!err) {
        //delete the file after 5s
        setTimeout(() => {
            fs.unlinkSync(`./${dirName}/xyz.txt`);
        }, 5000)
    }
})

//use "unlink()" to delete folder(directory) also