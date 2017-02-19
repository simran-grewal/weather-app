var  asyncAdd = (a, b) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(typeof a === 'number' && typeof b === 'number')
      {
          resolve(a + b);
      }
      else {
            reject('Argument must be number');
      }

    }, 1500);
  });
};

asyncAdd(2, 5).then((res) => {
  console.log('result = ',res);
  return asyncAdd(res,12);
}).then((res) =>{
  console.log('Should be =', res);
}, (errorMessage) => {
  console.log(errorMessage);
})



// var somePromise = new Promise((resolve, reject) => {
//   resolve('Hey. It is worked!');
//   //reject('**************');
// });
// somePromise.then((message) => {
//   console.log('Succes:',message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
// so somePromise has two parameters the first function in first argument is called when
// somePromise is resolved
// and second parameter function is called when reject
