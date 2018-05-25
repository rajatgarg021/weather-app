var request = require("request");

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a2d52570dda4f72d786d780009406f50/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            callback("something is wrong, cannot fetch the weather");
        }




    });
}

module.exports = {
    getWeather
}
