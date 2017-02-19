const request = require('request');
var getDetail = (address, callback) => {
  address = encodeURIComponent(address);
  request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json:true // taking request in json and converting into object
  }, (error, response, body) =>  {
      //  callback function
  //    console.log(body); // To print object
      //console.log(JSON.stringify(body, undefined, 3));
      // above one is to preetty print object in json :
      // 1st argument is body i.e the data which come back// second one is to filter something, and third is space(i.e how many tabs you want)
      if(error)
      {
        callback('Unable to connect to google server');
      }
      else if(body.status === 'ZERO_RESULTS') // status is specific to google jeo api you can test on website of googlemapapi by putting not exist address
      {
        callback('Unable to find that address');
      }
      else if(body.status === 'OK')
      {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      //   console.log(`Address: ${body.results[0].formatted_address}`);
      //   console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      //   console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
      //
    }
  });
  // response- contain hadder, status code.
  //error - may be error in url or wrong url // i.e domain not found

};
module.exports = {
  getDetail
}
