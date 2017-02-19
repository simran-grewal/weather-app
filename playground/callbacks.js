var getUser = (id, callback) => {
  var user = {
     id,
     name: 'Grewal'
  };

    callback(user);

};

getUser(31, (userObject) => {
  console.log(userObject);
});
// getUser(31, function(userObject){
//   console.log(userObject);
// })


// var sum = (a, b, res) =>{
//   res(a + b);
// }
//
// sum(3, 2, (result) => {
//   console.log(result);
// })
