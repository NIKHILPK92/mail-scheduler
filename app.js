const nodemailer = require("nodemailer");
const cron =require("node-cron");


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    secure: true,
    auth: {
        user: "2025slack@gmail.com",
        pass: "Power@321"
    }
})

cron.schedule('* * * * *', () =>{
let mailOptions = '';
let userData = ["nikhilpktcr@gmail.com", "nikhilpktcr@outlook.com"] //we can use userTable or collection to send data by looping it
    for(let i = 0; i< userData.length; i++){
        mailOptions = {
            from: "2025slack@gmail.com",
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











