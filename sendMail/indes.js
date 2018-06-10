var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
<<<<<<< HEAD
    user: 'account@gmail.comiammaster',
    pass: 'passwordssssddddiamnode1.1222'
=======
    user: 'account@gmail.comiammaster111',
    pass: 'passwordssssddddiamnode1.1'
>>>>>>> master
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