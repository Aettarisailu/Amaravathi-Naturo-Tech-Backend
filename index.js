const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/sendMail', (req, res) => {
  const { name, contact, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amaravathinaturotech.ant@gmail.com', // Your Gmail address
      pass: 'pojr bnnr ptah kyvw', // App password
    },
  });

  const mailOptions = {
    from: email || 'amaravathinaturotech.ant@gmail.com',
    to: 'amaravathinaturotech.ant@gmail.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

app.listen(5020, () => {
  console.log('Server running on port 5020');
});
