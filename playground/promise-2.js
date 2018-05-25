var request = require("request");
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("cannot reach servers at the moment");
            } else if (body.status === 'ZERO_RESULTS') {
                reject("cannot find the address");
            } else if (body.status === 'OK') {

                resolve( {
                    Address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })

            }




        });
    })

};

geocodeAddress("151001").then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});