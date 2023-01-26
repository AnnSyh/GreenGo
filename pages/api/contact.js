export default async function (req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    tls: { ciphers: "SSLv3" },
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailData = {
    from: "AnnSyh@rambler.ru",
    to: process.env.MAIL_USER,
    subject: req.body.message,
    text: "test",
    html: `<div>Email: ${req.body.email}</div>
            <div>Name: ${req.body.name}</div>
            <div>Message: ${req.body.message}</div>
            <div>Phone number: ${req.body.phoneNumber}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log("error = ", err);
      return res.status(400).json({ message: "Error", status: false });
    } else {
      console.log("info = ", info);
      return res.status(200).json({ message: "Message sent", status: true });
    }
  });
}
