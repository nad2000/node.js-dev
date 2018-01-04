// add yargs with: npm install yargs@4.7.1 --save

console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const titleOption = {
  describe: "Title of note",
  demand: true,
  alias: 't'
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOption,
    body: {
      describe: "Message body",
      demand: true,
      alias: 'b'
    }
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOption
  })
  .command("remove", "Remove a note", {
    title: titleOption
  })
  .help()
  .argv;
// console.log("process.argv", process.argv);
// console.log("yargs.argv", argv);

var command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note was created.`);
    notes.logNote(note);
  } else {
    console.error(`The note already exists. The title "${argv.title}" already taken.`);
  }
} else if (command == "list") {
  // for (let n of notes.getAll()) {
  //   console.log(`Note {title: "${n.title}", body: "${n.body}"}`);
  // }
  notes.getAll().forEach(n => {
    notes.logNote(n);
  });
} else if (command == "read") {
  var note = notes.getNote(argv.title);
  if (note) 
    notes.logNote(note);
  else
    console.error(`Note with title "${argv.title}" not found.`);
} else if (command == "remove") {
  var res = notes.deleteNote(argv.title);
  if (res) {
    console.log(`Note with title "${argv.title}" was deleted.`);
  } else {
    console.error(`Note with title "${argv.title}" not found.`);
  }
} else {
  console.log("Command not recognized");
}

