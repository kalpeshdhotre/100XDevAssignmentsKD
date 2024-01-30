const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db");
// const { JWT_SECRET } = require("../config");

// Admin Routes
// Implement admin signup logic
router.post("/signup", async (req, res) => {
   const username = req.body.username;
   const password = req.body.password;

   const user = await Admin.find({
      username,
   });
   if (user.length > 0) {
      res.json("user already exist ");
   } else {
      await Admin.create({
         username: username,
         password: password,
      });
      res.json("Admin account created successfully");
   }
});

router.post("/signin", async (req, res) => {
   // Implement admin signup logic
   const username = req.body.username;
   const password = req.body.password;
   const userCredentials = {
      username: username,
      password: password,
   };
   const user = await Admin.find({
      username,
      password,
   });
   if (user) {
      const token = jwt.sign(userCredentials, "abcd");
      res.json({
         Token: token,
         Message: "Login successful",
      });
   } else {
      res.json("Username or Password wrong");
   }
});

router.post("/courses", adminMiddleware, async (req, res) => {
   // Implement course creation logic
   const title = req.body.title;
   const description = req.body.description;
   const imageLink = req.body.imageLink;
   const price = req.body.price;

   const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price,
   });
   res.json({
      message: "Course Created successful",
      CourseId: newCourse._id,
   });
});

router.get("/courses", adminMiddleware, async (req, res) => {
   // Implement fetching all courses logic
   const allCourses = await Course.find({});
   res.json({ courses: allCourses });
});

module.exports = router;
