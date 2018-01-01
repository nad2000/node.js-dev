console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
// 3rd party module installed via npm 
/*
 * 1. run: npm init
 * 2. install moduel and update package.json: nmp install --save lodash
 *
 * When distributing the package w/o the node_modules run to install all dempendencies: 
 * npm install
 */
const _ = require("lodash");
const notes = require("./notes.js");

var user = os.userInfo();
// fs.appendFile("greetings.txt", "Hello world!\n");  // depricated
// fs.appendFile("greetings.txt", `Hello ${user.username}!, You are ${notes.age}.\n`, function (err) {
//   if (err) {
//     console.log("Unable to write to file.");
//   }
// });

// OR:
//fs.appendFileSync("greetings.txt", "Hello world!\n");


var res = notes.addNote();
console.log(res);

res = notes.add(9, -2);
console.log(`Result: ${res}`);

console.log(`42 is string?: ${_.isString(42)}`);
console.log(`true is string?: ${_.isString(true)}`);
console.log(`"abc" is string?: ${_.isString("abc")}`);

var someArray = [1, 1, 2, 3, 4, 2, 3, 3, 4, 4, 4];
console.log(`"Unique" of ${someArray}: ${_.uniq(someArray)}`);
