console.log("Starting app.");

const fs = require("fs");
const os = require("os");

// fs.appendFile("greetings.txt", "Hellow world!\n");  // depricated
fs.appendFile("greetings.txt", "Hellow world!\n", function (err) {
  if (err) {
    console.log("Unable to write to file.");
  }
});

// OR:
fs.appendFileSync("greetings.txt", "Hellow world!\n");


var user = os.userInfo();
console.log(user);
