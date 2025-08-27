"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplateString";
import { getAccentColor } from "./accentColors";
import { cookies } from "next/headers"; // ⬅️ Import cookies

export async function submitContactForm(formData: FormData) {
  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  // for now just console log the cookies, we'll make amendments to the html template later
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  const colorScheme = cookieStore.get("color-scheme");
  console.log("Theme:", theme);
  console.log("Color Scheme:", colorScheme);

  // Get accent color from cookie value
  const accent = getAccentColor(colorScheme?.value);
  console.log("Accent Color:", accent);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const notificationMailOptions = {
    from: `"${process.env.SMTP_NAME}" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: rawFormData.email,
    subject: `New Contact Form Submission: ${rawFormData.subject}`,
    text: `Name: ${rawFormData.name}\nEmail: ${rawFormData.email}\n\nMessage:\n${rawFormData.message}`,
    html: `<p><strong>Name:</strong> ${
      rawFormData.name
    }</p><p><strong>Email:</strong> <a href="mailto:${rawFormData.email}">${
      rawFormData.email
    }</a></p><p><strong>Message:</strong></p><p>${rawFormData.message.replace(
      /\n/g,
      "<br>"
    )}</p>`,
  };

  const confirmationHtml = emailTemplate
    .replace("{{name}}", rawFormData.name)
    .replaceAll("var(--accent)", accent);

  console.log("Generated Confirmation HTML:", confirmationHtml);

  const confirmationMailOptions = {
    from: `"${process.env.SMTP_NAME}" <${process.env.SMTP_USER}>`,
    to: rawFormData.email,
    subject: "Thank you for your message!",
    text: `Hi ${rawFormData.name},\n\nThank you for contacting me. I have received your message and will get back to you as soon as possible.\n\nBest regards,\nSebastian Meckovski`,
    html: confirmationHtml,
  };

  // Fire and forget: send both emails without waiting for the response.
  Promise.all([
    await transporter.sendMail(notificationMailOptions),
    await transporter.sendMail(confirmationMailOptions),
  ]).catch((error) => {
    console.error("Error sending emails:", error);
  });

  redirect("/contact?status=success");
}
