const express = require("express");
const route = express.Router();

const {
  createCourse,
  getCourseDetails,
  getAllCourses,
  editCourse,
  getInstructorCourses,
  deleteCourse,
  getFullCourseDetails,
} = require("../controller/courses");
const {
  createCategory,
  findCategory,
  showAllCategory,
} = require("../controller/categorys");
const {
  createSection,
  deleteSection,
  updateSecton,
} = require("../controller/sections");
const {
  createSubSection,
  deleteSubSection,
  updateSubSection,
} = require("../controller/subSections");
const {
  createRatingAndReview,
  allRating,
  averageRating,
} = require("../controller/ratingAndReviews");
const {
  auth,
  isStudent,
  isInstructor,
  isAdmin,
} = require("../middleware/auth");

// for instructor
route.post("/createCourse", auth, isInstructor, createCourse);
route.post("/createSection", auth, isInstructor, createSection);
route.delete("/deleteSection", auth, isInstructor, deleteSection);
route.post("/updateSecton", auth, isInstructor, updateSecton);
route.delete("/deleteSubSection", auth, isInstructor, deleteSubSection);
route.post("/createSubSection", auth, isInstructor, createSubSection);
route.post("/updateSubSection", auth, isInstructor, updateSubSection);
route.post("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
route.delete("/deleteCourse", auth, isInstructor, deleteCourse);
route.post("/editCourse", auth, isInstructor, editCourse);
route.post("/getFullCourseDetails", auth , getFullCourseDetails);

// for admin

route.post("/createCategory", auth, isAdmin, createCategory);

//for all
route.post("/findCategory", findCategory);
route.get("/showAllCategory", showAllCategory);
route.get("/allCourses", auth, getAllCourses);
route.post("/getCourse", getCourseDetails);

route.post("/createRatingAndReview", auth, isStudent, createRatingAndReview);
route.get("/allRating", auth, allRating);
route.get("/averageRating", auth, averageRating);

module.exports = route;
