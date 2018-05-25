
var yargs = require('yargs');
var weather = require("./weather/weather");
var geocode = require("./geocode/geocode");
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
    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if(errorMessage){
            console.log(errorMessage);
        }
        else{
            console.log(results.Address);
            weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
                if (errorMessage) {
                    console.log(errorMessage);
                }
                else {
                    console.log(`its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
                }
            });
                
        }
    });
    



//a2d52570dda4f72d786d780009406f50
//https://api.darksky.net/forecast/a2d52570dda4f72d786d780009406f50/30.17384139999999,74.89749250000001





