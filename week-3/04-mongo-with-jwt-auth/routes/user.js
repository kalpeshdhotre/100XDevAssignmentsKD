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

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
   // Implement course purchase logic
   const courseID = req.params.courseId;
   const username = req.decodedValue;
   try {
      await User.updateOne(
         { username: username },
         {
            $push: {
               purchasedCourses: courseID,
            },
         }
      );
      res.json({
         msg: "Purchase Complete",
      });
   } catch (error) {
      res.json("error occured");
   }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
   // Implement fetching purchased courses logic
   // const username = req.decodedValue;
   try {
      const user = await User.findOne({ username: req.decodedValue });
      const myCourses = await Course.find({
         _id: {
            $in: user.purchasedCourses,
         },
      });
      res.json({ myCourses: myCourses });
   } catch (error) {
      res.json("error");
   }
});

module.exports = router;
