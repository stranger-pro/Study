const User = require("../model/user");
const {mailSender} = require("../util/mailSender");
const bcrypt = require('bcrypt');

exports.resetPasswordToken = async (req,res) => {
    try{
        const {email} = req.body;

        if(!email){
            return res.status(403).json({
                success:false,
                message:"Email Is Not Filled"
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(403).json({
                success:false,
                message:"User not Registered"
            })
        }

        const token = crypto.randomUUID();

        const updatedDetail = await User.findOneAndUpdate({email},{
                                token:token,
                                resetPasswordExpires:Date.now()+5*60*1000
        },{new:true});

        const url = `http://localhost:5173/update-password/${token}`;

        await mailSender(email,"Passwort Reser Link",`Password Reset Link : ${url}`);

        return res.json({
            success:true,
            message:"email send reset password"
        })
    }catch(e){
        console.log("During Password reset token",e.message);
        return res.status(500).json({
            success:false,
            message:"Somting went wrong"
        })
    }
}

exports.resetPassword = async (req,res) => {
    try{
            const {token,Password,confirmPassword} = req.body;
    
            if(!token || !Password || !confirmPassword){
                return res.status(403).json({
                    success:false,
                    message:"send all data "
                })
            }
    
            if(Password !== confirmPassword){
                return res.status(400).json({
                    success:false,
                    message:"Password and Confirm Password not match"
                })
            }
    
            const user = await User.findOne({token:token});
    
            if(!user){
                return res.status(401).json({
                    success:false,
                    message:"token is invalid"
                })
            };

            if(user.resetPasswordExpires < Date.now()){
                return res.status(401).json({
                    success:false,
                    message:"token is expired"
                })
            };
    
            let hashPassword = await bcrypt.hash(Password,10);
    
            user.password = hashPassword;
    
            const userResponce = await User.findOneAndUpdate({token:token},{
                password:hashPassword,
            },{new:true});

            
            
    
            return res.status(200).json({
                success:true,
                message:"Password is Changed"
            })
    
            
    
        }catch(e){
            console.log("while resetPassword",e);
            return res.status(500).json({
                success:false,
                message:"Password Is Not Changed"
            })
        }
}