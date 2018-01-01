console.log("Starting notes.js");

////console.log(module);
//module.exports.age = 25;


//module.exports.add = (a, b) => {
//  return a + b;
//};


// arrow function doesn't bind 'this' and ...
var addNote = (title, body) => {
  console.log("addNote", title, body);
  return "New Note";
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
