// add yargs with: npm install yargs@4.7.1 --save

console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
// console.log("process.argv", process.argv);
// console.log("yargs.argv", argv);

var command = argv._[0];

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command == "list") {
  notes.getAll();
} else if (command == "read") {
  notes.getNote(argv.title);
} else if (command == "remove") {
  notes.deleteNote(argv.title);
} else {
  console.log("Command not recognized");
}

