const { recaptcha } = require('express-recaptcha');
const sendMail = require("./sendMail");
const express = require("express")
const cors = require("cors")

require('dotenv').config();
const PORT = process.env.PORT

// Configure globally required middleware
const app = express()
app.use(express.json())
app.use(cors())

// Configure rate limiting middleware
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 2, // Limit each IP to 2 request per 5 minute
});


app.listen(PORT, ()=> {
    console.log("\nServer is running on PORT:", PORT)
})

app.post('/api/sendMail', limiter, async (req,res)=> {
    const { name, email, phone, message } = req.body;
    try {
        await sendMail(name, email, phone, message);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }
})