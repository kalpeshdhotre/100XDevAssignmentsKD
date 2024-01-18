const startTime = Date.now();
let endTime = 0;
let time = 0;

setTimeout(() => {
   endTime = Date.now();
   time = endTime - startTime;
}, 3000);

console.log(typeof(time));
