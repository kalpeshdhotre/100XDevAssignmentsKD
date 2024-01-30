const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
   const username = req.body.username;
   const password = req.body.password;

   const user = await User.find({
      username,
   });
   if (user.length > 0) {
      res.json("user already exists");
   } else {
      const newUser = await User.create({
         username,
         password,
      });
      res.json({ msg: "New User Created", ID: newUser._id });
   }

   // Implement user signup logic
});

router.post("/signin", async (req, res) => {
   // Implement admin signup logic
   const username = req.body.username;
   const password = req.body.password;

   const user = await User.find({
      username,
      password,
   });

   if (user.length > 0) {
      const token = jwt.sign(username, "abcd");
      res.json({ Token: token });
   } else {
      res.json({ Msg: "User not found", user });
   }
});

router.get("/courses", async (req, res) => {
   // Implement listing all courses logic
   const token = req.headers.authorization;
   const jwtToken = token.split(" ")[1];

   try {
      const decodedValue = jwt.verify(jwtToken, "abcd");
      if (decodedValue) {
         const allCourses = await Course.find();
         res.json(allCourses);
      } else {
         res.json({ msg: "Authentication failed", token: jwtToken });
      }
   } catch (error) {
      res.json("Token Error");
   }
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
   // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
   // Implement fetching purchased courses logic
});

module.exports = router;
