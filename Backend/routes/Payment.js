const express = require('express');
const route = express.Router();

const {verifyPayment} = require('../controller/payment');
const {auth,isStudent} = require('../middleware/auth');


route.post("/verifyPayment",auth,isStudent,verifyPayment);

module.exports =route;