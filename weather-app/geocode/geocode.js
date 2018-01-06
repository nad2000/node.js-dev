const request = require("request");

const geocodeAddress = (address, callback) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to Google servers.");
    } else if (body.status === "ZERO_RESULTS") {
      callback("Unable to find that address.");
    } else if (body.status === "OK") {
      //console.log(JSON.stringify(response, undefined, 2));
      // console.log(JSON.stringify(body, undefined, 2));
      //console.log(JSON.stringify(body, (k, v) => {
      // if (k !== "place_id") return v;
      // }, 2));
      var loc = body.results[0].geometry.location;
      callback(undefined, 
	{
	  address: body.results[0].formatted_address,
	  latitude: loc.lat,
	  longitude: loc.lng
	});
    };
  });
};

module.exports = {geocodeAddress};
