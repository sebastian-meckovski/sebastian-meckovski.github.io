const express = require("express");
const yup = require("yup");
const { returnHostMsg } = require("./templates/hostMsg.js");
const { returnCustomerMsg } = require("./templates/customerMsg.js");
const cors = require("cors");
const PORT = 8000;
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

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
  const customerMsg = {
    from: process.env.REACT_APP_HOST_EMAIL,
    to: req.body.email,
    subject: req.body.subject,
    html: returnCustomerMsg(req),
  };

  const hostMsg = {
    from: process.env.REACT_APP_HOST_EMAIL,
    to: process.env.REACT_APP_HOST_EMAIL,
    subject: req.body.subject,
    html: returnHostMsg(req),
  };

  (async () => {
    try {
      await sgMail.send(customerMsg).then((obj) => {
        console.log("Customer message sent...");
        console.log("status code:", obj[0].statusCode);
      });
      await sgMail.send(hostMsg).then((obj) => {
        console.log("Host email sent...");
        console.log("Status code:", obj[0].statusCode);
      });
      return res.json({ body: req.body });
    } catch (err) {
      console.error(err);
      res.status(400).json({ type: err.name, message: err.message });
    }
  })();
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
