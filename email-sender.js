const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nada12lak@gmail.com',
        pass: 'Iwillmakethemsuffer2'
    }
});

let mailOptions = {
    from: 'nada12lak@gmail.com',
    to: 'nada12lak@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js using nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
