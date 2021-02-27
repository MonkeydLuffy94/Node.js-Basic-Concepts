// delete the whole folder named "Created With Node".

const fs = require("fs");

//Note: make a directory named "Created With Node" -> create a file named note.txt -> save dump data [txt] inside the new file

//check if our folder already exist or not
if (fs.existsSync("Created With Node")) {
  console.log(
    "\"Created With Node\" already exist. Please delete the whole folder first to see the changes."
  );
} else {
  //1.make a directory named "Created With Node"
  fs.mkdir("./Created With Node", (err) => {
    if (!err) {
      console.log('"Created With Node" successfully created.');

      // create a example string to be stored in new file
      const txt = `
This is a new file.

We will write text to a file using fs.writeFile.

`;
      // 2. Create a file named note.txt and 3. Store the string inside note.txt
      fs.writeFile("./Created With Node/note.txt", txt.trim(), (err) => {
        if (!err) {
          console.log('"note.txt" successfully created and text is added.');
        } else {
          console.log(err.message);
        }
      });
    } else {
      console.log(err.message);
    }
  });
}
