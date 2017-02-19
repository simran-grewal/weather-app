var request = require('request')
var getAddress = (address) => {

    return new Promise((resolve, reject) => {
      address = encodeURIComponent(address);
      request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json:true // taking request in json and converting into object
      }, (error, response, body) =>  {

          if(error)
          {
            reject('Unable to connect to google server');
          }
          else if(body.status === 'ZERO_RESULTS') // status is specific to google jeo api you can test on website of googlemapapi by putting not exist address
          {
            reject('Unable to find that address');
          }
          else if(body.status === 'OK')
          {
            resolve({
              address: body.results[0].formatted_address,
              latitude: body.results[0].geometry.location.lat,
              longitude: body.results[0].geometry.location.lng
            })

        }
      });
    });
};

getAddress('146106').then((location) => {
console.log(JSON.stringify(location, undefined, 2));
},(error) => {
  console.log(error);
});
