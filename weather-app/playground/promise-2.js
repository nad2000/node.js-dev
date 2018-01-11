const request = require("request");
const config = require("../config");

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject("Unable to connect to Google servers.");
      } else if (body.status === "ZERO_RESULTS") {
        reject("Unable to find that address.");
      } else if (body.status === "OK") {
        var loc = body.results[0].geometry.location;
        resolve({
          address: body.results[0].formatted_address,
          latitude: loc.lat,
          longitude: loc.lng
        });
      };
    });
  });
};

geocodeAddress("Auckland 1010").then(
  (location) => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  (errorMessage) => {
    console.log(location);
  });

var getWeather = (lat, lng, callback) => {
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

