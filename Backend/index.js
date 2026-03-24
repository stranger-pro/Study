const express = require("express");
const app = express();
const path = require('path')

const { CloudinaryConnect } = require("./configration/cloudinary");
const { connectDb } = require("./configration/database");
// razorpay not connected

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");
const profileRoutes = require("./routes/Profile");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// dbconnect
connectDb();
CloudinaryConnect();
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials:true,
  }),
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname,"./tem/"),
  }),
);

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("listen..");
});
console.log(process.env.PORT);
