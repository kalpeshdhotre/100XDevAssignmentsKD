const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
// Implement user signup logic
router.post("/signup", async (req, res) => {
   const username = req.body.username;
   const password = req.body.password;

   await User.create({
      username: username,
      password: password,
   });
   res.json({
      messege: "User created successfully",
   });
});

// Implement listing all courses logic
router.get("/courses", async (req, res) => {
   const allCourses = await Course.find();
   res.json(allCourses);
});

// Implement course purchase logic
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
   const courseId = req.params.courseId;
   const username = req.headers.username;

   await User.updateOne(
      {
         username: username,
      },
      {
         $push: {
            purchasedCourses: courseId,
         },
      }
   );
   res.json({
      message: "Purchase Complete",
   });
});

// Implement fetching purchased courses logic
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
   const user = await User.findOne({
      username: req.headers.username,
   });
   // console.log(user.purchasedCourses);
   const courses = await Course.find({
      _id: {
         $in: user.purchasedCourses,
      },
   });
   res.json({
      courses: courses,
   });
});

module.exports = router;
