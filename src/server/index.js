const express = require("express");
const yup = require("yup");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = 8000;
require("dotenv").config();

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
  console.log(process.env.REACT_APP_EMAIL_LOGIN)
  console.log(process.env.PORT)
  let transporter = nodemailer.createTransport({
    host: process.env.REACT_APP_HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.REACT_APP_EMAIL_LOGIN,
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
  });

  var mailOptions = {
    from: process.env.REACT_APP_EMAIL_LOGIN,
    to: req.body.email,
    subject: req.body.subject,
    // text: req.body.message,
    html: `<h1>Hello, ${req.body.name}! </h1> Thanks for reaching out! 
    This page is still under developemnt but I will get back to you shortly!`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });

  return res.json({ body: req.body });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
