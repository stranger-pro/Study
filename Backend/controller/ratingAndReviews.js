const Rating = require('../model/ratingAndReview');
const Course = require('../model/course');
const User = require('../model/user');
const mongoose = require('mongoose');

// creating review and rating
exports.createRatingAndReview = async(req,res) => {
    try{
        
        const {cid,review,rating} = req.body;
        const uid = req.user.id;

        if(!uid || !cid || !review || !rating){
            return res.status(400).json({
                success:false,
                message:"fill all fields"
            })
        } 

        const course = await Course.findById({_id:cid});

        if(!course){
            return res.status(404).json({
                success:false,
                message:"course id invalid"
            })
        }

        console.log(course);

        if(!course?.studentsEnrolled.includes(uid)){
            return res.status(403).json({
                success:false,
                message:"user not enrolled"
            })
        }

        const checkReview = await Rating.findOne({user:uid,course:cid});

        if(checkReview){
            return res.status(403).json({
                success:false,
                message:"user alredy review this course"
            })
        }


        const newReview = await Rating.create({
            user:uid,
            course:cid,
            review:review,
            rating:rating
        },{new:true});

        await Course.findByIdAndUpdate(cid,{
            $push:{
              ratingAndReviews:newReview._id,
            }
        },{new:true});

        return res.status(200).json({
                success:true,
                message:"review submitted",
                newReview,
            })

    }catch(e){
        console.log("while creating review",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

// average rating
exports.averageRating = async(req,res) => {
    try{
        
        const {cid} = req.body;
        
        if(!cid){
            return res.status(400).json({
                success:false,
                message:"Provide Course Id"
            })
        } 

        const result  = await Rating.aggregate([
            {
                $match:{ 
                    course : mongoose.Types.ObjectId(cid),
                },
            },
            {
                $group:{
                    _id:null,
                    averageRatings : {$avg:"$rating"},
                }
            }
        ]);

        if(result.length > 0){
            return res.status(200).json({
                success:true,
                averageRatings:result[0].averageRatings,
            })
        }

         return res.status(200).json({
                success:true,
                message:"zero ratings,no ratings exits",
                averageRatings :0,
            })



    }catch(e){
        console.log("while average rating",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}

// get all review
exports.allRating = async(req,res) => {
    try{
        
        const rating = await (await Rating.find({})).sort({rating:"desc"})
                                            .populate({path:"course",select:"courseName"})
                                            .populate({path:"User",select:"firstName lastName email image"})
                                            .exec();

        return res.status(200).json({
            success:true,
            message:"All rsting and review fetched",
            rating,
        })
    }catch(e){
        console.log("while getting all rating",e);
            return res.status(500).json({
                success:false,
                message:e.message
            })
    }
}