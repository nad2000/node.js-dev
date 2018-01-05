const request = require("request");

request({
  url: "https://maps.googleapis.com/maps/api/geocode/json?address=85%20symonds%20street%20grafton%20auckland%20new%20zealand",
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
  //console.log(JSON.stringify(body, (k, v) => {
  // if (k !== "place_id") return v;
  // }, 2));
});
