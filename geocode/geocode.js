var request = require("request");




var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("cannot reach servers at the moment");
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback("cannot find the address");
        }
        else if (body.status === 'OK') {
            
            callback(undefined, {
                Address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        
        }




    });
}
module.exports = {
    geocodeAddress
}
