const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3333;
var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs"); // this is optional

hbs.registerHelper("currentYear", () => new Date().getFullYear());
hbs.registerHelper("screamIt", text => text.toUpperCase());

// Logging middleware:
app.use((req, res, next) => {
  var now = new Date().toISOString();
  var msg = `${now}: ${req.method} ${req.url}`
  console.log(msg);
  fs.appendFile("server.log", msg + '\n', (err) => {
    if (err) {
      console.log("Unable to append to server.log.");
    }
  });
  next();
});

// Maintenance
app.use((req, res, next) => {
  res.render("maintenance.hbs", {
    pageTitle: "Maintenance"
  });
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express!</h1>");
  // res.send({name: "Rad", likes: ["Cats", "Dogs", ]});
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to my website"
  });
});

app.get("/about", (req, res) => {
  //res.send("<h1>About Page</h1>");
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Failed to execute the request."
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

