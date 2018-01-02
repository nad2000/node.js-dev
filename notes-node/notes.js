console.log("Starting notes.js");
const fs = require("fs");

////console.log(module);
//module.exports.age = 25;


//module.exports.add = (a, b) => {
//  return a + b;
//};
//

var fetchNotes = () => {
  try {
    data = fs.readFileSync("notes-data.json");
    return JSON.parse(data);
  } catch (e) {
    return [];
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};


// arrow function doesn't bind 'this' and ...
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {title, body};

  var duplicateNotes = notes.filter(n => n.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  return fetchNotes().filter(n => n.title === title)[0];
};

var deleteNote = (title) => {
  var notes = fetchNotes()
  var newNotes = notes.filter(n => n.title !== title);
  if (notes.length !== newNotes.length) {
    saveNotes(newNotes);
    return true;
  }
};


var logNote = note => {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

// laternative way of exposing API usnig ES6 syntax:
module.exports = {
  addNote,
  getAll,
  getNote,
  deleteNote,
  logNote
};
