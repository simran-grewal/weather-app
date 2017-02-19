console.log('starting app');
setTimeout(() => {
  console.log('Inside of collback');
}, 2000);
setTimeout(() =>{
  console.log('Second setTimeout');
}, 0)
console.log('Finishing app');
