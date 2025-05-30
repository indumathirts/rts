const nodemailer = require('nodemailer');
require('dotenv').config();

// ✅ Update with your actual email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "indumathieswaramoorthi@gmail.com",
    pass: "zpjm heik hyeg noro", // App Password
  },
});

// Mail options
const mailOptions = {
  from: `"IRTS System" <${"indumathieswaramoorthi@gmail.com"}>`,
  to: 'indumathirts@gmail.com',
  subject: '🚀 Welcome to IRTS!',
  text: 'Hello, this is a test welcome email from your Node.js project!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('❌ Error:', error);
  } else {
    console.log('✅ Email sent:', info.response);
  }
});
