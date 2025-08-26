// emailTemplateString.ts
// Export your email template as a string for use in production.

export const emailTemplate = `
<!-- turbofied-email.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Confirmation</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap');

    body {
      font-family: 'Rajdhani', 'Segoe UI', Arial, sans-serif;
      background-color: #f4f7f9;
      color: #0e1a2b;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 520px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      padding: 40px 32px;
      text-align: center;
    }

    .avatar {
      width: 110px;
      height: 110px;
      margin: 0 auto 20px;
      border-radius: 50%;
      background: radial-gradient(circle at center, #00ff99 0%, #00e676 100%);
      box-shadow: 0 0 24px rgba(0, 255, 153, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 56px;
      color: white;
    }

    h1 {
      font-size: 2em;
      font-weight: 700;
      margin-bottom: 0.2em;
      color: #0e1a2b;
    }

    h2 {
      font-size: 1.2em;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 1.5em;
      color: #00e676;
    }

    p {
      font-size: 1.05em;
      line-height: 1.6;
      margin: 1em 0;
      color: #1a273d;
    }

    .tagline {
      font-style: italic;
      font-size: 0.95em;
      color: #6b7a90;
      margin-bottom: 2em;
    }

    .signature {
      margin-top: 2em;
      font-style: italic;
      font-size: 1.1em;
      color: #334155;
    }

    .footer {
      margin-top: 3em;
      font-size: 0.85em;
      color: #9aa5b1;
    }

    .button {
      display: inline-block;
      margin-top: 2em;
      background-color: #00e676;
      color: #0e1a2b;
      text-decoration: none;
      padding: 0.75em 1.5em;
      border-radius: 50px;
      font-weight: 600;
      box-shadow: 0 4px 10px rgba(0, 230, 118, 0.4);
      transition: all 0.2s ease;
    }

    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 230, 118, 0.55);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="avatar">💬</div>

    <h1>Hey {{name}} 👋</h1>
    <h2>Message successfully uploaded to my brain 🧠✅</h2>

    <p>
      Thank you for reaching out!  
      Your message has officially landed in my inbox — and I’m already curious.  
      I’ll get back to you as soon as possible.
    </p>

    <p class="tagline">
      Meanwhile, feel free to grab a ☕ — I’ll bring the code.
    </p>

    <a href="https://sebastian-meckovski.com" class="button">Visit my portfolio</a>

    <div class="signature">
      Best regards,<br/>
      <strong>Sebastian Meckovski</strong><br/>
      <span style="color:#00e676;">(a.k.a. a program 🤖)</span>
    </div>

    <div class="footer">
      © 2025 Sebastian Meckovski. All rights reserved.<br/>
      Designed with 💚 &lt;/&gt;
    </div>
  </div>
</body>
</html>
`;
