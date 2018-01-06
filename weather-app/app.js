const yargs = require("yargs");
const goecode = require("./geocode/geocode");
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

goecode.geocodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
      console.log(JSON.stringify(result, undefined, 2));
  }
});

// https://api.darksky.net/forecast/c10a48b517724b0ec3121af13a44d472/-36.8556522,174.767108?units=si
const request = require("request");

  request({
    url: `https://api.darksky.net/forecast/${config.DARKSKY_APIKEY}/-36.8556522,174.767108?units=si`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log("Cannot connect to API");
    } else if (!error & response.statusCode === 200) {
      console.log(`Temperature now ${body.currently.temperature}`);
    } else {
      console.log("Unable to fetch weather.");
    }
  });

