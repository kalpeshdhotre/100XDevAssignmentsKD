const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
   // Implement user auth logic
   // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
   const bearerToken = req.headers.authorization;
   const token = bearerToken.split(" ")[1];
   try {
      const decodedToken = jwt.verify(token, "abcd");
      if (decodedToken) {
         req.decodedValue = decodedToken;
         next();
      } else {
         res.json("Authentication failed");
      }
   } catch (error) {
      res.json("Token invalid");
   }
}

module.exports = userMiddleware;
