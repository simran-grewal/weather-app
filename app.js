const yargs = require('yargs');
const jeocode = require('./jeocode/jeocode.js')
const weather = require('./weather/weather.js')
const argv = yargs
.options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
.help()
.alias('help', 'h')
.argv;

jeocode.getDetail(argv.address, (error, results) =>{
  if(error)
  {
    console.log(error);
  }
  else {
     console.log(results.address);
     weather.getWeather(results.latitude, results.longitude,(error, weather) => {
         if(error)
         {
           console.log(error);
         }
         else {
             //console.log(JSON.stringify(results,undefined,2));
             console.log(`Its currently ${weather.temperature}. is feels Like ${weather.apparentTemperature}.`);
         }
     });
  }
});

// lng, lat, callback


// below is api key
//c7fa3e8de859602051dc7ba614f93255
