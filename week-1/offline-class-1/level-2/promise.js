function promiseExample() {
   return new Promise(function (resolve) {
      setTimeout(() => {
         resolve("Hi from promise inside");
      }, 2000);
   });
}

// function onSuccess(data) {
//    console.log(data);
// }

// promiseExample().then(onSuccess);

// ==========================================================

async function onSuccess() {
   console.log(await promiseExample());
   console.log(`Hi from function call onSuccess`);   
}

onSuccess();
console.log("hi from main program");

