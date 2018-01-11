const yargs = require("yargs");
const axios = require("axios");
const config = require("./config");

var argv = yargs
  .options({
    a: {
      describe: "Address",
      demand: true,
      alias: "address",
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .argv;

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`

axios.get(geocodeUrl).then(
  (response) => {
    if (response.data.status === "ZERO_RESULTS") {
      // this will be passed to 'catch'
      throw new Error("Unable to find that address.");
    }
    debugger;
    var loc = response.data.results[0].geometry.location;
    var weatherUrl = `https://api.darksky.net/forecast/${config.DARKSKY_APIKEY}/${loc.lat},${loc.lng}?units=si`;
    console.log(response.data.results[0].formatted_address);
    //console.log(loc);
    return axios.get(weatherUrl);
  }).then((response) => {
    var temperature = response.data.currently.temperature;
	  var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
  }).catch((e) => {
  if (e.code === "ENOTFOUND") {
    console.log("Unable to connect to API servers");
  } else {
    console.log(e.message);
  }

});

