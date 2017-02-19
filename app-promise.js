const yargs = require('yargs');
const axios = require('axios');
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

var encode = encodeURIComponent(argv.address);
var  jeoCodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encode}`;
axios.get(jeoCodeUrl).then((response) =>{
  if(response.data.status === 'ZERO_RESULTS')
  {
    throw new Error('Unable to find');
  }
  var lng = response.data.results[0].geometry.location.lng;
  var lat = response.data.results[0].geometry.location.lat;
  var weatherUrl = `https://api.darksky.net/forecast/c7fa3e8de859602051dc7ba614f93255/${lng},${lat}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) =>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Its currently${temperature} . It feels like ${apparentTemperature}`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND')
  {
    console.log('Could not connect to api server');
  }
  else {
    console.log(e.message);
  }

});
