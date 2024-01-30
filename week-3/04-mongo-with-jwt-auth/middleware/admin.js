const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
   // Implement admin auth logic
   // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
   const token = req.headers.authorization;
   const words = token.split(" ");
   const jwtToken = words[1];
   try {
      const decodedValue = jwt.verify(jwtToken, "abcd");
      if (decodedValue.username) {
         next();
      } else {
         res.json({ msg: "Some error- Authentication not successful" });
      }
   } catch (error) {
      res.json({
         msg: "Incorrect token",
      });
   }
}

module.exports = adminMiddleware;
