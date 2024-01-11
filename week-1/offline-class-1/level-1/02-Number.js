function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("Rs 3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
// if string which has to be conveted into float or integer , does not start
// with number then output will be NaN, Also function start parsing from begining 
// and stops when it encounters a character the is not part of the valid number

explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("rs42.4px");

