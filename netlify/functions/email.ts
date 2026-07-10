import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

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

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { type, payload } = data;

    if (type === 'contact') {
      await transporter.sendMail({
        from: `"Marchello The Jeweler" <${user}>`,
        to: adminEmail,
        replyTo: payload.email,
        subject: `New Contact from ${payload.name}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } 
    
    if (type === 'order') {
      // Email to customer
      await transporter.sendMail({
        from: `"Marchello The Jeweler" <${user}>`,
        to: payload.customer_email,
        subject: `Order Confirmation - ${payload.order_number}`,
        html: `<h2>Thank you for your order, ${payload.customer_name}!</h2>
        <p>Your order <strong>${payload.order_number}</strong> has been received.</p>
        <p>Total: $${payload.total.toFixed(2)}</p>
        <p>We will contact you with further details regarding processing.</p>`,
      });

      // Notification to admin
      await transporter.sendMail({
        from: `"Marchello The Jeweler" <${user}>`,
        to: adminEmail,
        subject: `New Order Received - ${payload.order_number}`,
        html: `<h2>New Order: ${payload.order_number}</h2>
        <p><strong>Customer:</strong> ${payload.customer_name} (${payload.customer_email})</p>
        <p><strong>Total:</strong> $${payload.total.toFixed(2)}</p>
        <p>Log in to your admin panel to view full order details.</p>`,
      });
      
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Invalid request type" })
    };

  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Failed to send email" })
    };
  }
};
