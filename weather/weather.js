const request = require('request');

var getWeather = (long, let, callback) => {
  request({
        url:`https://api.darksky.net/forecast/c7fa3e8de859602051dc7ba614f93255/${long},${let}`,
        json: true
  }, (error, response, body) => {
      if(!error && response.statusCode === 200)
      {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
      }
      else {
        callback('Unable to fetch data');
      }
  });

};
module.exports = {
  getWeather
}
