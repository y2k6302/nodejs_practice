var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'account@gmail.comiammaster',
    pass: 'passwordssssddddiamnode1.1'
  }
});


var mailOptions = {
    from: 'fromsss@gmail.com',
    to: 'to@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});