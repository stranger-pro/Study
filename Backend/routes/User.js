const express = require("express");
const route = express.Router();

const {
  signUp,
  signIn,
  changePassword,
  sendOtp,
} = require("../controller/Auth");
const {
  resetPasswordToken,
  resetPassword,
} = require("../controller/ResetPassword");
const { auth } = require("../middleware/auth");

route.post("/signUp", signUp);
route.post("/signIn", signIn);
route.post("/changePassword", auth, changePassword);
route.post("/sendOtp", sendOtp);

route.post("/resetPasswordToken", resetPasswordToken);
route.post("/resetPassword", resetPassword);

module.exports = route;
