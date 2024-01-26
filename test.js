const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "secret";

// const token = jwt.sign({ foo: "This is test of JWT Token " }, pass);
// const time = new Date().getTime();

// console.log(token);

// console.log(time);

// console.log(" decoded from JWT : ", iat);

// try {
//    const decode = jwt.verify(token, pass);
//    console.log(decode);
// } catch (error) {
//    console.log("error");
//    console.log(error.message);
// }

function signJwt(username, password) {
   // Your code here
   const userName = zod.string().email();
   const pass = zod.string().min(6);
   if (userName.safeParse(username).success && pass.safeParse(password).success) {
      const token = jwt.sign({ username, password }, jwtPassword);
      console.log(token);

      return jwt.sign({ username, password }, jwtPassword);
   } else {
      return null;
   }
}

signJwt("kalpesh@hotmail.com", "abcd1234");
