const Cloudinary = require('cloudinary').v2;
require('dotenv').config();

exports.CloudinaryConnect = () => {
    try{
        Cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.CLOUD_API_KEY,
            api_secret:process.env.CLOUD_API_SECRET,
        })
    }catch(e){
        console.log("cloudinary not connected",e);
    }
}