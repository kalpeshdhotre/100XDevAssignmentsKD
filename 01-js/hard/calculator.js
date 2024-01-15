/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
   constructor() {
      this.result = 0;
   }

   add(number) {
      this.result += number;
      // console.log(this.result);
   }

   multiply(number) {
      this.result *= number;
      // console.log(this.result);
   }

   subtract(number) {
      this.result -= number;
      // console.log(this.result);
   }

   divide(number) {
      if (parseInt(number) == 0) {
         console.log("divide by zero error");
         throw new Error("Error");
      }
      this.result /= number;
   }

   clear() {
      this.result = 0;
   }

   calculate(expression) {
      const cleanedExpression = expression.replace(/s+/g, " ").trim();
      if (!/^[0-9+\-*/(). ]+$/.test(cleanedExpression)) {
         throw new Error("Invalid characters in the expression");
      }
      try {
         if (cleanedExpression.includes("/ 0")) {
            throw new error("Error");
         }
         this.result = eval(cleanedExpression);
      } catch (error) {
         throw new Error("Invalid expression");
      }
   }

   getResult() {
      // console.log(`Result is ${this.result}`);
      return this.result;
   }
}

// const myCalc = new Calculator();

// myCalc.calculate('10 +  +sd+ 2 *    (   6 - (4 + 1) / 2) + 7');

// myCalc.add(10);
// myCalc.divide(0);

// myCalc.multiply(2);
// myCalc.getresult();
// myCalc.clear();
// myCalc.getResult();

module.exports = Calculator;
