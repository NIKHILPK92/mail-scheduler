const nodemailer = require("nodemailer");
const cron =require("node-cron");


let transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: process.env.PORT,
    service: process.env.SERVICE,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

cron.schedule('* * * * *', () =>{
let mailOptions = '';
let userData = process.env.USER_DETAILS //we can use userTable or collection to send data by looping it
    for(let i = 0; i< userData.length; i++){
        mailOptions = {
            from: process.env.USER_MAIL
            to: userData[i],
            subject: "Daily schedule",
            text: "sheduled task"
        }
        console.log("user", mailOptions.to);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log('Message sent: %s', info.messageId);
        }); 
    }
})
