const express = require("express");
const route = express.Router();

const {
  updateProfile,
  deleteAccount,
  getUserDetail,
  updateDisplayPicture,
  getEnrolledCourses,
  instructorDashboard,
} = require("../controller/profiles");

const {
  auth,
  isStudent,
  isInstructor,
  isAdmin,
} = require("../middleware/auth");

route.delete("/deleteAccount", auth, deleteAccount);
route.put("/updateProfile", auth, updateProfile);
route.get("/getUserDetail", auth, getUserDetail);

// complete check

route.put("/updateDisplayPicture", auth, updateDisplayPicture);
route.get("/getEnrolledCourses", auth, isStudent, getEnrolledCourses);
route.get("/instructorDashboard", auth, isInstructor, instructorDashboard);

module.exports = route;
