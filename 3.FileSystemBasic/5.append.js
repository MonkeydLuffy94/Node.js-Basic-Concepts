const { fstat } = require("fs");
const fs = require("fs");

const colorData = require("./assets/colors.json");

//check if "Created With Node" exists or not and create one if does not present
const dirName = "Test Files With Node";
if(!fs.existsSync(dirName)) {
    fs.mkdirSync(`./${dirName}`);
}


colorData.colorList.forEach((color) => {
    // appendFile() create a new file if does not exist and add text at the last part
    fs.appendFile(`./${dirName}/colors.txt`, `${color.color} : ${color.hex}\n`, err => {
        if(err) {
            console.log(err.message);
        }
    });
})