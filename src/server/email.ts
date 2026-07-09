import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

// Retrieve env vars
const host = process.env.SMTP_HOST || "mail.spacemail.com";
const port = parseInt(process.env.SMTP_PORT || "465", 10);
const user = process.env.SMTP_USER || "support@marchell0thejeweler.com";
const pass = process.env.SMTP_PASS || "Marc1234?";
const adminEmail = process.env.ADMIN_EMAIL || "support@marchell0thejeweler.com";

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((d: { name: string; email: string; message: string }) => d)
  .handler(async ({ data }) => {
    try {
      await transporter.sendMail({
        from: `"Marchello The Jeweler" <${user}>`,
        to: adminEmail,
        replyTo: data.email,
        subject: `New Contact from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      });
      return { success: true };
    } catch (error) {
      console.error("Failed to send contact email:", error);
      return { success: false, error: "Failed to send email" };
    }
  });

export const sendOrderConfirmation = createServerFn({ method: "POST" })
  .validator((d: { 
    order_number: string; 
    customer_email: string; 
    customer_name: string;
    subtotal: number;
    total: number;
  }) => d)
  .handler(async ({ data }) => {
    try {
      // Email to customer
      await transporter.sendMail({
        from: `"Marchello The Jeweler" <${user}>`,
        to: data.customer_email,
        subject: `Order Confirmation - ${data.order_number}`,
        html: `<h2>Thank you for your order, ${data.customer_name}!</h2>
        <p>Your order <strong>${data.order_number}</strong> has been received.</p>
        <p>Total: $${data.total.toFixed(2)}</p>
        <p>We will contact you with further details regarding processing.</p>`,
      });

      // Notification to admin
      await transporter.sendMail({
        from: `"Marchello The Jeweler" <${user}>`,
        to: adminEmail,
        subject: `New Order Received - ${data.order_number}`,
        html: `<h2>New Order: ${data.order_number}</h2>
        <p><strong>Customer:</strong> ${data.customer_name} (${data.customer_email})</p>
        <p><strong>Total:</strong> $${data.total.toFixed(2)}</p>
        <p>Log in to your admin panel to view full order details.</p>`,
      });
      return { success: true };
    } catch (error) {
      console.error("Failed to send order confirmation:", error);
      return { success: false, error: "Failed to send email" };
    }
  });
