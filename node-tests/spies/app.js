const db = require("./db");

// spies - allows to track if a function gets invoked..
module.exports.handleSignup = (email, password) => {
  // Chekc if eamil already exists
  // Save the user to the database
  db.saveUser({
    email,
    password
  });
  // Send the welcome email
};

