const node_mailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async(email,title , body) => {
    try{
        let transporter = node_mailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from:"Studynotion || otp-send",
            to:`${email}`,
            subject:`${title}`,
            html:body
        })

    }catch(e){
        console.log(e.message);
    }
}