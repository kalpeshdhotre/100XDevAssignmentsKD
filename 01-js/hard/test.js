a = 10;
b = 30;

if (!(eval(a / b) == Infinity)) {
   console.log("No error");
}

if (eval(a / b) == -Infinity) {
   console.log("negative divide by zero");
}
