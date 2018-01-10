const request = require("request");
const config = require("./config");

var  getWeather = (lat, lng, callback)  => {
  request({
    url: `https://api.darksky.net/forecast/${config.DARKSKY_APIKEY}/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Cannot connect to API");
    } else if (!error & response.statusCode === 200) {
      callback(undefined, {
	temperature: body.currently.temperature,
	apperantTemperature: body.currently.apparentTemperature
      });
    } else {
      callback("Unable to fetch weather.");
    }
  });
}

module.exports = {getWeather};
