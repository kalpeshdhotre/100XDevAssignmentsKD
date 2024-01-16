let counter = 1;

function countUpTo(target) {

   console.clear();
   console.log(counter);
   counter++;

   if (target != 1) {
      setTimeout(() => {
         countUpTo(target - 1);
      }, 1000); // Adjust the timeout duration (in milliseconds) as needed
   }
}


countUpTo(4);
