const yargs = require("yargs");
const goecode = require("./geocode/geocode");
const weather = require("./weather");

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
    // console.log(JSON.stringify(result, undefined, 2));
    weather.getWeather(result.latitude, result.longitude, (errorMessage, result) => {
      if (errorMessage) {
	console.log(errorMessage);
      } else {
	console.log(JSON.stringify(result, undefined, 2));
      }
    });
  }
});

