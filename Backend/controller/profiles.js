const Profile = require('../model/profile');
const User = require('../model/user');
const {uplodeFile} = require('../util/fileUploder');
const Course = require('../model/course');
const CourseProgress = require('../model/courseProgress');
const {convertSecondsToDuration} = require('../util/secToDuration')

// update account
exports.updateProfile = async(req,res) => {
    try{
        const {gender,dateOfBirth="",about="",contactNumber} = req.body;
        const userId = req.user.id;
        if(!gender || !contactNumber || !userId){
            return res.status(400).json({
                success:false,
                message:"fill all fields profile"
            });
        }

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found profile"
            })
        }
        const profileId = user.additionalDetails;
        const updatedProfile = await Profile.findByIdAndUpdate(profileId,{
            gender:gender,
            dateOfBirth:dateOfBirth,
            about:about,
            contactNumber:contactNumber,
            
        },{new:true});
       
        const updatedUser = await User.findById(userId).populate("additionalDetails").select("-password");

        return res.status(200).json({
            success:true,
            message:"profile updated",
            updatedUser
        })
    }catch(e){
        console.log("while updating profile",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

// delete account
exports.deleteAccount = async(req,res) => {
    try{
        const userId = req.user.id;

        if(!userId){
            return res.status(400).json({
                success:false,
                message:"fill all fields profile"
            });
        }

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found profile"
            })
        }
        
        await Profile.findByIdAndDelete({_id:user.additionalDetails});
        await User.findByIdAndDelete(userId);

        return res.status(200).json({
            success:true,
            message:"Account deleted"
        })

    }catch(e){
        console.log("while deleting account",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

// getallUserDeltail
exports.getUserDetail = async(req,res) => {
    try{
        const id = req.user.id;
        
        const user = await User.findById(id).populate("additionalDetails").exec();
        console.log(id);
        if(!user){ 
            return res.status(404).json({
                success:false,
                message:"user not found profile"
            })
        }

        return res.status(200).json({
            success:true,
            message:"all details fetched",
            user,
        })

    }catch(e){
        console.log("while fetching user",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

// update profile photo 
exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture;
      const userId = req.user.id
      const image = await uplodeFile(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      );
      
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      );

      res.send({
        success: true,
        message: 'Image Updated successfully',
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};
  
exports.getEnrolledCourses = async (req, res) => {
    try {
      const userId = req.user.id
      let userDetails = await User.findById({_id:userId})
      .populate({
        path: "courses",
        populate: {
        path: "courseContent",
        populate: {
          path: "subSection",
        },
        },
      })
      .exec()
      
        userDetails = userDetails.toObject();

        let SubsectionLength = 0
        for (let i = 0; i < userDetails.courses.length; i++) {
        let totalDurationInSeconds = 0
        SubsectionLength = 0
        for (var j = 0; j < userDetails.courses[i].courseContent.length; j++) {
            totalDurationInSeconds += userDetails.courses[i].courseContent[j]
            .subSection.reduce((acc, curr) => acc + parseInt(curr.timeDuration), 0)
            userDetails.courses[i].totalDuration = convertSecondsToDuration(totalDurationInSeconds)

            SubsectionLength +=
            userDetails.courses[i].courseContent[j].subSection.length
        }
        let courseProgressCount = await CourseProgress.findOne({
            courseID: userDetails.courses[i]._id,
            userId: userId,
        })

        courseProgressCount = courseProgressCount?.completeVideos.length
        if (SubsectionLength === 0) {
            userDetails.courses[i].progressPercentage = 100
        } else {
            // To make it up to 2 decimal point
            const multiplier = Math.pow(10, 2)
            userDetails.courses[i].progressPercentage =
        Math.round(
            (courseProgressCount / SubsectionLength) * 100 * multiplier
        ) / multiplier
        }
        }

      if (!userDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find user with id: ${userDetails}`,
        })
      }
      return res.status(200).json({
        success: true,
        data: userDetails.courses,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};

// instructor analysis
exports.instructorDashboard = async(req, res) => {
 try{
  const courseDetails = await Course.find({instructor:req.user.id});

   const courseData  = courseDetails.map((course)=> {
   const totalStudentsEnrolled = course?.studentsEnrolled?.length
   const totalAmountGenerated = totalStudentsEnrolled * course.price

   
   const courseDataWithStats = {
    _id: course._id,
    courseName: course.courseName,
    courseDescription: course.courseDescription,
    totalStudentsEnrolled,
    totalAmountGenerated,
   }
   return courseDataWithStats
  })

  res.status(200).json({courses:courseData});

 }
 catch(error) {
  console.error(error);
  res.status(500).json({message:"Internal Server Error"});
 }
}