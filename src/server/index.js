const PORT = 8000;
const express = require("express");
const yup = require("yup");
require("dotenv").config();
const cors = require("cors");
// const axios = require("axios");

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
  return res.json({ body: req.body });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
