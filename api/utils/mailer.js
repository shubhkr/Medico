'use strict';
const nodemailer = require('nodemailer');

module.exports = {
   sendMail: function(email) {
      console.log(email)
      console.log(sails.config.connections.mailer)
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport(sails.config.connections.mailer);

      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Medico 👻" <yugiskskaiba@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Regarding your appointment', // Subject line
        text: 'Hello world?', // plain text body
        html: '<p>Thank you so much for booking an appointment with us. Your appointment confirmation ' +
         'along with other details will be sent to your email soon.</p> <p> In case we can\'t ' +
         'book your appointment at your prefered date and time, someone from our team will contact you soon.</p> ' +
         '<br> Regards, <br> Medico team' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
   }
}
