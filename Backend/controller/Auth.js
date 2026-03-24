const User = require("../model/user");
const Otp = require("../model/otp");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../model/profile");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {mailSender} = require("../util/mailSender");

exports.sendOtp = async (req,res) => {
    try{

        const {email} = req.body;

        if(!email.endsWith("@gmail.com")){
            return res.status(400).json({
                success:false,
                message:"Invalid Email!"
            })
        }

        const userAlredyExit = await User.findOne({email});

        if(userAlredyExit){
            return res.status(401).json({
                success:false,
                message:"User Already Exits !"
            })
        };

        let otp = await otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })

        const otpPayload = {otp,email};

        const otpBody = await Otp.create(otpPayload);

        return res.status(200).json({
            success:true,
            message:"OTP send successfully",
            otp
        })


    }catch(e){
        console.log("while otpsending",e);
        return res.status(500).json({
            
            success:false,
            message:e.message
        })
    }
};


exports.signUp = async (req,res) => {
    try{

        const {firstName,lastName,email,password,confirmPassword ,accountType,otp} = req.body;

        if(!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success:false,
                message:"All fields required"
            })
        }
        if(!email.endsWith("@gmail.com")){
            return res.status(400).json({
                success:false,
                message:"Invalid Email!"
            })
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and Confirm Password not match"
            })
        }

        const userAlredyExit = await User.findOne({email});

        if(userAlredyExit){
            return res.status(401).json({
                success:false,
                message:"User Already Exits !"
            })
        };

        let validAccountType = ["Student","Instructor","Admin"];

        if(!validAccountType.includes(accountType)){
            return res.status(401).json({
                success:false,
                message:"Account type is invalid"
            })
        }

        const recentOTP = await Otp.find({email}).sort({createdAt:-1}).limit(1);

        

        if(recentOTP.length == 0 ){
            return res.status(400).json({
                success:false,
                message:"Otp not found"
            })
        }else if( recentOTP[0].otp!== otp){
            return res.status(400).json({
                success:false,
                message:"Invalid Otp"
            })
        }
        

        const hashPassword = await bcrypt.hash(password,10);

        const profile = await Profile.create({gender:null,dateOfBirth:null,about:null,contactNumber:null});

        const user = await User.create({firstName,lastName,email,password:hashPassword,
                                        accountType,additionalDetails:profile._id,
                                        image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`});
        
        

        return res.status(200).json({
            success:true,
            message:"user registered successfully",
            user
        })

    }catch(e){
        console.log("while signUP",e);
        return res.status(500).json({
            success:false,
            message:"try again user not registered"
        })
    }
}


exports.signIn = async(req,res) => {
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"Fill All Fields"
            })
        }

        const user = await User.findOne({email}).populate("additionalDetails");

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User Not Exits !"
            })
        };

        

        if(!(await bcrypt.compare(password,user.password))){
            return res.status(401).json({
                success:false,
                message:"Password Is Wrong"
            })
        }

        let payload = {
            email:user.email,
            id:user._id,
            accountType:user.accountType
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"2h"
        });

        user.token = token;
        user.password = undefined;

        return res.cookie("token",token,{
            expires:new Date(Date.now() + 3*24*60*60*1000),
            httpOnly:true
        }).status(200).json({
            success:true,
            token,
            user,
            message:"Log In Successfully"
        })

    }catch(e){
        console.log("while signIn",e);
        return res.status(200).json({
            success:false,
            message:"User Not sign in"
        })
    }
}

exports.changePassword = async(req,res) => {
    try{
        const {email,oldPassword,newPassword,confirmNewPassword} = req.body;

        if(!email || !oldPassword || !newPassword || !confirmNewPassword){
            return res.status(403).json({
                success:false,
                message:"Fill All Fields"
            })
        }

        if(newPassword !== confirmNewPassword){
            return res.status(400).json({
                success:false,
                message:"Password and Confirm Password not match"
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User Not Exists !"
            })
        };

        if(!(await bcrypt.compare(oldPassword,user.password))){
            return res.status(401).json({
                success:false,
                message:"Password Is Wrong"
            })
        }

        let hashPassword = await bcrypt.hash(newPassword,10);

        user.password = hashPassword;

        const userResponce = await user.save();
        try{
            const emailResponce = await mailSender(email,"Password Changed","Your password has been changed successfully");
            console.log("mail send sucssecfully ", emailResponce);
        }catch(e){
            console.log("Email failed but password is changed");
        }
        

        return res.status(200).json({
            success:true,
            message:"Password is Changed"
        })

        

    }catch(e){
        console.log("while changing password",e);
        return res.status(500).json({
            success:false,
            message:"Password Is Not Changed"
        })
    }
}