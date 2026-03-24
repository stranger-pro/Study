const mongoose = require("mongoose");
const {mailSender} = require("../util/mailSender");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:5*60
    }
});

async function sendVerificationEmail(email,otp){
    try{
        const emailResponce = await mailSender(email,"Verification otp send",otp);
        console.log("mail send sucssecfully ", emailResponce);
    }catch(e){
        console.log("Error In otp.js" , e);
    }
}

otpSchema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports = mongoose.model("Otp",otpSchema);