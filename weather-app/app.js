const request = require("request");

request({
  url: "https://maps.googleapis.com/maps/api/geocode/json?address=85%20symonds%20street%20grafton%20auckland%20new%20zealand",
  json: true
}, (error, response, body) => {
  console.log(body);
});
