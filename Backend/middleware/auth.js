const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async(req , res,next) => {
    try{
        const token = req.cookies?.token || req.body?.token || req.header("Authorization").replace("Bearer ","");
        
        if(!token){
            return res.Status(401).json({
                success:false,
                message:"token not found"
            })
        }
        
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode;
            
        }catch(e){
            console.log(e);
            return res.status(401).json({
                success:false,
                message:"Error In Token"
            })
        }

        next();

    }catch(e){
        console.log(e);
        return res.status(401).json({
                success:false,
                message:"somthing went wrong while validate the token"
            })
    }
}


exports.isStudent = (req,res,next) => {
    try{
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"protected routes for student"
            })
        }

        next();

    }catch(e){
        return res.status(500).json({
                success:false,
                message:"user role cannot verified"
            })
    }
}

exports.isInstructor = (req,res,next) => {
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"protected routes for instructor"
            })
        }

        next();

    }catch(e){
        return res.status(500).json({
                success:false,
                message:"user role cannot verified"
            })
    }
}

exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"protected routes for admin"
            });
        }

        next();

    }catch(e){
        return res.status(500).json({
                success:false,
                message:"user role cannot verified"
            });
    }
}