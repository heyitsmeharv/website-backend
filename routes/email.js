const router = require('express').Router();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

router.route('/send').post((req, res) => {
  const message = req.body.message;
  const name = req.body.name;
  const telephone = req.body.telephone;
  const company = req.body.company;
  const email = req.body.email;

  const mailOptions = {
    from: email,
    to: 'heyitsmeharv@gmail.com',
    subject: name,
    text: `${message} - ${company} - ${telephone}`
  }

  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      res.status(500).json({ message: `error, ${error}` });
    } else {
      res.json({ message: `email sent: ${data}` });
    }
  });

});

module.exports = router;