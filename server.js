const express = require("express");
const nodemailer = require('nodemailer');
const path = require('path');

app = express(); // Initializing app

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/cowin.html'));
});

app.get("/sendmail", function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'covacnotification@gmail.com',
      pass: 'L0g1nP@ssw0rd'
    }
  });

  var mailOptions = {
    from: 'covacnotification@gmail.com',
    to: 'mihirchittora6@gmail.com',
    subject: 'Vaccine Available',
    text: 'Book slot'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send('Sending mail failed.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Mail sent.');
    }
  });
});

app.listen(3000);