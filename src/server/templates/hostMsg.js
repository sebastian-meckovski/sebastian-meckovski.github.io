const returnHostMsg = (req) => {
  return `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .details {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .message {
            font-size: 16px;
            margin-top: 20px;
        }
    </style>
    <body>
    <div class="container">
        <div class="header">Contact Form Transcript</div>
        <div class="details">
            <p><strong>From:</strong> ${req.body.name} - ${req.body.email}</p>
        </div>
        <div class="message">
            <p><strong>Message:</strong></p>
            <p>${req.body.message}</p>
        </div>
    </div>
        `;
};

module.exports = {
  returnHostMsg,
};
