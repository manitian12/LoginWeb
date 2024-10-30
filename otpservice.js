const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Function to generate a 4-digit OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Route to handle OTP sending
router.post('/', async (req, res) => {
    const otp = generateOTP();
    const email = req.body.email;

    // Setup email configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Add your email in .env file
            pass: process.env.PASSWORD // Add your email password in .env file
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, otp: otp }); // Send OTP back for testing only; remove in production
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to send OTP' });
    }
});

module.exports = router;
