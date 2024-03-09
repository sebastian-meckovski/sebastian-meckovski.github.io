const express = require("express");
const yup = require("yup");
const cors = require("cors");
// const nodemailer = require("nodemailer");
const PORT = 8000;
require("dotenv").config();
// const emailjs = require("@emailjs/nodejs");
const sgMail = require("@sendgrid/mail");

var templateParams = {
  name: "James",
  notes: "Check this out!",
};

const allowedOrigins = [
  "http://localhost:3000",
  "https://sebastian-meckovski.com",
  "https://sebastian-meckovski.github.com",
];

const corsOptions = {
  origin: allowedOrigins,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Methods",
    "Access-Control-Request-Headers",
  ],
  credentials: true,
  enablePreflight: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const schema = yup
  .object({
    name: yup.string().required(),
    subject: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
  })
  .required();

const validate = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body, {
      name: body.name,
      subject: body.subject,
      email: body.email,
      message: body.message,
    });
    return next();
  } catch (err) {
    return res.status(400).json({ type: err.name, message: err.message });
  }
};

app.post("/send-mail", validate(schema), (req, res) => {
  console.log("sending email...");
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
  const msg = {
    to: req.body.email,
    from: process.env.REACT_APP_FROM, // Use the email address or domain you verified above
    subject: req.body.subject,
    // text: req.body.message,
    html: `<h1>Hi, ${req.body.name}!</h1> <p> Thanks for reaching out!
    This page is still under developemnt but I will get back to you shortly </p>`,
  };
  //ES6
  (async () => {
    try {
      await sgMail.send(msg).then((obj) => {
        console.log("sent...");
        console.log("status code:", obj[0].statusCode);
      });
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();

  // emailjs
  //   .send(
  //     process.env.REACT_APP_SERVICE_ID,
  //     process.env.REACT_APP_TEMPLATE_ID,
  //     templateParams,
  //     {
  //       publicKey: process.env.REACT_APP_PUBLIC_KEY,
  //       privateKey: process.env.REACT_APP_PRIVATE_KEY, // optional, highly recommended for security reasons
  //     }
  //   )
  //   .then(
  //     function (response) {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     function (err) {
  //       console.log("FAILED...", err);
  //     }
  //   );

  // let transporter = nodemailer.createTransport({
  //   host: process.env.REACT_APP_HOST,
  //   port: process.env.PORT,
  //   auth: {
  //     user: process.env.REACT_APP_EMAIL_LOGIN,
  //     pass: process.env.REACT_APP_EMAIL_PASS,
  //   },
  // });

  // var mailOptions = {
  //   from: process.env.REACT_APP_EMAIL_LOGIN,
  //   to: req.body.email,
  //   subject: req.body.subject,
  //   // text: req.body.message,
  //   html: `<h1>Hello, ${req.body.name}! </h1> Thanks for reaching out!
  //   This page is still under developemnt but I will get back to you shortly!`,
  // };
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log("Message sent: %s", info.messageId);
  // });

  return res.json({ body: req.body });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
