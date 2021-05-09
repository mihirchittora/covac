const express = require("express");
const nodemailer = require('nodemailer');
const path = require('path');

app = express(); // Initializing app

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/cowin.html'));
});

app.get("/sendmail", function (req, res) {
  let msg = req.query.msg;
  let email = req.query.email;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'covacnotification@gmail.com',
      pass: 'L0g1nP@ssw0rd'
    }
  });

  var mailOptions = {
    from: 'covacnotification@gmail.com',
    to: email,
    subject: 'Vaccine Available',
    text: msg
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

app.listen(process.env.PORT || 3000);