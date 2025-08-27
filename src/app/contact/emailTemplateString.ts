// emailTemplateString.ts
// Export your email template as a string for use in production.

export const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Confirmation</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f4f7f9;
      font-family: Arial, sans-serif;
    "
  >
    <center style="width: 100%; table-layout: fixed; background-color: #f4f7f9">
      <table
        align="center"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 32px;
          text-align: center;
          width: 100%;
        "
      >
        <tr>
          <td align="center">
            <table
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="width: 100%"
            >
              <tr>
                <td align="center">
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="
                      width: 120px;
                      height: 120px;
                      margin: 0 auto 20px;
                      border-radius: 50%;
                      background: {{accent}};
                    "
                  >
                    <tr>
                      <td
                        align="center"
                        style="font-size: 64px; line-height: 1; color: #ffffff"
                      >
                        💬
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-bottom: 5px">
                  <h1
                    style="
                      font-size: 2.5em;
                      font-weight: 700;
                      color: #0e1a2b;
                      margin: 0;
                    "
                  >
                    Hey {{name}} 👋
                  </h1>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-bottom: 24px">
                  <h2
                    style="
                      font-size: 1.4em;
                      font-weight: 500;
                      color: {{accent}};
                      margin: 0;
                    "
                  >
                    Message successfully uploaded to my brain 🧠✅
                  </h2>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  style="
                    font-size: 1.15em;
                    line-height: 1.6;
                    color: #1a273d;
                    padding-bottom: 1em;
                  "
                >
                  Thank you for reaching out! Your message has officially landed
                  in my inbox — and I’m already curious. I’ll get back to you as
                  soon as possible.
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  style="
                    font-style: italic;
                    font-size: 1.05em;
                    color: #6b7a90;
                    padding-bottom: 2em;
                  "
                >
                  Meanwhile, feel free to grab a coffee — I’ll bring the code.
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a
                    href="https://sebastian-meckovski.com"
                    target="_blank"
                    style="
                      display: inline-block;
                      margin-top: 2em;
                      background-color: {{accent}};
                      color: #0e1a2b;
                      text-decoration: none;
                      padding: 0.85em 1.8em;
                      border-radius: 50px;
                      font-weight: 600;
                      font-size: 16px;
                    "
                  >
                    <b style="font-weight: 600">Visit my portfolio</b>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top: 2em">
                  <div
                    style="
                      font-style: italic;
                      font-size: 1.2em;
                      color: #334155;
                      margin-top: 2em;
                    "
                  >
                    Best regards,<br />
                    <strong style="color: #0e1a2b">Sebastian Meckovski</strong
                    ><br />
                    <span style="color: {{accent}}">(a.k.a. a program 🤖)</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top: 3em">
                  <div
                    style="
                      font-size: 0.9em;
                      color: #9aa5b1;
                      border-top: 1px solid #e0e6e9;
                      padding-top: 20px;
                      margin-top: 20px;
                    "
                  >
                    &copy; 2025 Sebastian Meckovski. All rights reserved.<br />
                    Designed with passion &lt;/&gt;
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
`;
