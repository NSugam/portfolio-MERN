const nodemailer = require('nodemailer');

require('dotenv').config();
const gmail_address = process.env.GMAIL_ADDRESS
const gmail_password = process.env.GMAIL_APP_PASSWORD

async function sendMail(name, email, phone, message) {

    // Create a transporter object using your Gmail credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmail_address,
            pass: gmail_password
        }
    });

    // Set up email data
    const mailOptions = {
        from: 'Sugam Neupane <forwardtechnical.official@gmail.com>',
        to: 'nsugam248@gmail.com',
        subject: 'Message from Contact Form',
        html:
        `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        `
    };

    // Send mail with defined transport object
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return

    } catch (error) {
        throw new Error('Failed to send email');
    }


}

module.exports = sendMail;
