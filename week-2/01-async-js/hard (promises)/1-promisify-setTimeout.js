/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve();
      }, n * 1000);
   });
}

// const newWait = new wait();
// newWait.then(1000);

// wait(1)
//    .then((result) => {
//       console.log(result);
//    })
//    .catch((error) => {
//       console.log(error);
//    });

module.exports = wait;
