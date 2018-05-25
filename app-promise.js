var axios = require("axios");
var yargs = require('yargs');
var argv = yargs
    .options({
        a: {
            alias: 'address',
            describe: "address to fetch weather of ",
            demand: true,
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error("unable to find that address");
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/a2d52570dda4f72d786d780009406f50/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
    
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e)=>{   
        if(e.code === 'ENOTFOUND'){
            console.log("something is wrong")
        } 
        else {
            console.log(e.message);
        }
        
});


//a2d52570dda4f72d786d780009406f50
//https://api.darksky.net/forecast/a2d52570dda4f72d786d780009406f50/30.17384139999999,74.89749250000001





