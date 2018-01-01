console.log("Starting notes.js");
const fs = require("fs");

////console.log(module);
//module.exports.age = 25;


//module.exports.add = (a, b) => {
//  return a + b;
//};


// arrow function doesn't bind 'this' and ...
var addNote = (title, body) => {
  var notes = [];
  var note = {title, body};
  try {
    data = fs.readFileSync("notes-data.json");
    notes = JSON.parse(data);
  } catch (e) {
    notes = [];
  };

  var duplicateNotes = notes.filter(n => n.title == title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
  }

  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var getAll = () => {
  console.log("Gettting all notes");
  return [];
};

var getNote = (title) => {
  console.log("Gettting the note ", title);
  return "";
};

var deleteNote = (title) => {
  console.log("Deleting the note ", title);
  return "";
};

// laternative way of exposing API usnig ES6 syntax:
module.exports = {
  addNote,
  getAll,
  getNote,
  deleteNote
};
