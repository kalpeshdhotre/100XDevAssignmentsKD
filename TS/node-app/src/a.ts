// let x: number = 1;
// x = "hello";
// console.log(x);

// function greet(fName: string) {
//    console.log("Hello", fName);
// }

// greet(999);

// type inference
// function sum(a: number, b: number) {
//    return a + b;
// }

// const val = sum(1, 2);
// console.log(val);

// function isLegal(age: number) {
//    if (age >= 18) {
//       return true;
//    } else {
//       return false;
//    }
// }

// let x = isLegal(19);

// function runAfter1s(fn: () => void) {
//    setTimeout(fn, 1000);
// }

// runAfter1s(function () {
//    console.log("Hello");
// });

interface User {
   firstName: string;
   lastName: string;
   age: number;
   email?: string;
}

function isLegal(user: User) {
   if (user.age >= 18) {
      return true;
   } else {
      return false;
   }
}

function greet(user: User) {
   console.log("Hello", user.firstName);
}

isLegal({ firstName: "John", lastName: "Doe", age: 19 });
