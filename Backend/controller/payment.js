const User = require('../model/user');
const Course = require('../model/course');
const mailSender = require('../util/mailSender');
const { mongoose } = require('mongoose');
const CourseProgress = require("../model/courseProgress")


exports.verifyPayment = async(req,res) => {
    try{
        const { courses } = req.body
        const userId = req.user.id
        if (courses.length === 0) {
            return res.json({ success: false, message: "Please Provide Course ID" })
        }

        for (const course_id of courses) {
            let course = await Course.findById(course_id)
        
            if (!course) {
                return res
                .status(200)
                .json({ success: false, message: "Could not find the Course" })
            }

            const uid = new mongoose.Types.ObjectId(userId)
            if (course.studentsEnrolled.includes(uid)) {
              return res
                .status(200)
                .json({ success: false, message: "Student is already Enrolled" })
            }

            
            const enrolledCourse = await Course.findOneAndUpdate(
                { _id: course_id },
                { $push: { studentsEnrolled: userId } },
                { new: true }
            )
            
            if (!enrolledCourse) {
                return res
                .status(500)
                .json({ success: false, error: "Course not found" })
            }
            
            const courseProgress = await CourseProgress.create({
                    courseID:course_id,
                    userID:userId,
                    completeVideos:[]
                })
                
                
            
            const enrolledStudent = await User.findByIdAndUpdate(
              userId,
              {
                $push: {
                  courses: course_id,
                  courseProgress: courseProgress._id,
                },
              },
              { new: true }
            )
        }

        return res.status(200).json({
                success:true,
                message:"course verification successfull"
            })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}