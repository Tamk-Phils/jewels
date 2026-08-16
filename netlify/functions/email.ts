import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const host = process.env.SMTP_HOST || "mail.spacemail.com";
const port = parseInt(process.env.SMTP_PORT || "465", 10);
const user = process.env.SMTP_USER || "support@marchell0thejeweler.com";
const pass = process.env.SMTP_PASS || "Marc1234?";
const adminEmail = process.env.ADMIN_EMAIL || "support@marchell0thejeweler.com";
const fromEmail = process.env.FROM_EMAIL || user;

async function sendMailHelper({ to, subject, html, replyTo }: { to: string; subject: string; html: string; replyTo?: string }) {
  if (resend) {
    const sender = process.env.RESEND_FROM || `Marchello The Jeweler <onboarding@resend.dev>`;
    try {
      const { data, error } = await resend.emails.send({
        from: sender,
        to,
        subject,
        html,
        replyTo: replyTo,
      });

      if (error) {
        console.warn("[Resend Primary Warning]:", error.message);
        // Free tier testing mode restriction: emails deliver to phils7872@gmail.com until domain is verified
        if (error.message?.includes("testing emails to your own email address") || (error as any).name === "validation_error") {
          console.log("[Resend] Free tier testing mode active. Forwarding email to owner phils7872@gmail.com...");
          const fallbackRes = await resend.emails.send({
            from: sender,
            to: "phils7872@gmail.com",
            subject: `[TESTING FORWARD] ${subject}`,
            html: `
              <div style="padding: 12px; background: #fff3cd; color: #856404; border: 1px solid #ffeeba; border-radius: 4px; margin-bottom: 15px; font-family: sans-serif; font-size: 13px;">
                <strong>Resend Testing Mode Notice:</strong> This email was originally targeted to <em>${to}</em>. In Resend testing mode, emails are delivered to <strong>phils7872@gmail.com</strong>.
              </div>
              ${html}
            `,
            replyTo: replyTo,
          });
          return fallbackRes.data;
        }
        throw new Error(`Resend Error: ${error.message}`);
      }
      return data;
    } catch (e: any) {
      console.error("[Resend Exception]:", e);
      return { warning: e?.message };
    }
  }

  // Fallback to Nodemailer SMTP
  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 10000,
    });

    return await transporter.sendMail({
      from: `"Marchello The Jeweler" <${fromEmail}>`,
      to,
      replyTo,
      subject,
      html,
    });
  } catch (err: any) {
    console.error("[SMTP Fallback Error]:", err);
    return { warning: err?.message };
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { type, payload } = data;

    if (type === 'contact') {
      // 1. Email to Admin (Inquiry Alert)
      await sendMailHelper({
        to: adminEmail,
        replyTo: payload.email,
        subject: `New Contact Inquiry from ${payload.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #b8912d;">New Contact Inquiry</h2>
            <p><strong>Customer Name:</strong> ${payload.name}</p>
            <p><strong>Customer Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #b8912d;">
              ${(payload.message || '').replace(/\n/g, '<br/>')}
            </div>
          </div>
        `,
      });

      // 2. Automated Auto-Reply to Customer
      await sendMailHelper({
        to: payload.email,
        subject: `We've received your message — Marchello The Jeweler`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a; background-color: #ffffff; border: 1px solid #e5e5e5;">
            <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #e8c547;">
              <h1 style="font-size: 24px; letter-spacing: 2px; margin: 0; color: #1a1a1a;">MARCHELLO<span style="color: #e8c547;">.</span></h1>
              <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: #888; margin-top: 5px;">Fine Jewelry Atelier</p>
            </div>

            <div style="padding: 30px 0;">
              <h2 style="font-size: 20px; font-weight: normal; color: #1a1a1a;">Hello ${payload.name},</h2>
              <p style="font-size: 14px; line-height: 1.6; color: #444;">
                Thank you for reaching out to <strong>Marchello The Jeweler</strong>. We have received your message.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #444;">
                Our personal shopping support team is reviewing your inquiry and will be getting back to you momentarily.
              </p>

              <div style="background-color: #fafafa; padding: 20px; border-radius: 4px; margin: 25px 0; border-left: 4px solid #e8c547;">
                <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-top: 0;">Summary of Your Inquiry</h3>
                <p style="font-size: 13px; color: #555; font-style: italic; margin-bottom: 0;">
                  "${(payload.message || '').replace(/\n/g, '<br/>')}"
                </p>
              </div>

              <p style="font-size: 13px; color: #666; margin-top: 20px;">
                For immediate shopping assistance, email us directly at: <a href="mailto:${adminEmail}" style="color: #1a1a1a; font-weight: bold;">${adminEmail}</a>.
              </p>
            </div>

            <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; font-size: 11px; color: #888;">
              <p>Marchello The Jeweler Fine Jewelry Atelier</p>
            </div>
          </div>
        `,
      });

      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: true }),
      };
    }

    if (type === 'order') {
      const itemsListHtml = (payload.items || [])
        .map(
          (item: any) => `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$${Number(item.price * item.quantity).toLocaleString()}</td>
          </tr>
        `
        )
        .join('');

      const addressHtml = payload.shipping_address
        ? `
          <p>
            ${payload.shipping_address.full_name || payload.customer_name}<br/>
            ${payload.shipping_address.line1 || ''} ${payload.shipping_address.line2 || ''}<br/>
            ${payload.shipping_address.city || ''}, ${payload.shipping_address.state || ''} ${payload.shipping_address.postal_code || ''}<br/>
            ${payload.shipping_address.country || ''}<br/>
            Phone: ${payload.shipping_address.phone || 'N/A'}
          </p>
        `
        : 'N/A';

      // 1. Email to Customer
      await sendMailHelper({
        to: payload.customer_email,
        subject: `Order Confirmation - ${payload.order_number} | Marchello The Jeweler`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a; background-color: #ffffff; border: 1px solid #e5e5e5;">
            <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #e8c547;">
              <h1 style="font-size: 24px; letter-spacing: 2px; margin: 0; color: #1a1a1a;">MARCHELLO<span style="color: #e8c547;">.</span></h1>
              <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: #888; margin-top: 5px;">Fine Jewelry Atelier</p>
            </div>

            <div style="padding: 30px 0;">
              <h2 style="font-size: 20px; font-weight: normal; color: #1a1a1a;">Thank you for your order, ${payload.customer_name}!</h2>
              <p style="font-size: 14px; line-height: 1.6; color: #444;">
                Your order <strong>${payload.order_number}</strong> has been successfully recorded in our system.
              </p>

              <div style="background-color: #fafafa; padding: 20px; border-radius: 4px; margin: 25px 0;">
                <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #e8c547; margin-top: 0;">Next Step: Verification & Processing</h3>
                <p style="font-size: 13px; line-height: 1.6; color: #555; margin-bottom: 0;">
                  To verify payment and initiate immediate dispatch of your fine jewelry order, please get in touch with our team directly:
                </p>
                <ul style="font-size: 13px; line-height: 1.8; color: #333; margin-top: 10px; padding-left: 20px;">
                  <li>Email: <a href="mailto:${adminEmail}" style="color: #1a1a1a; font-weight: bold;">${adminEmail}</a></li>
                </ul>
              </div>

              <h3 style="font-size: 16px; margin-top: 30px;">Order Summary (${payload.order_number})</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 10px;">
                <thead>
                  <tr style="background-color: #f4f4f4; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">
                    <th style="padding: 10px; text-align: left;">Item</th>
                    <th style="padding: 10px; text-align: center;">Qty</th>
                    <th style="padding: 10px; text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsListHtml}
                </tbody>
              </table>

              <div style="margin-top: 20px; text-align: right; font-size: 14px; line-height: 1.8;">
                <p style="margin: 3px 0;">Subtotal: <strong>$${Number(payload.subtotal || 0).toLocaleString()}</strong></p>
                <p style="margin: 3px 0;">Shipping: <strong>${payload.shipping === 0 ? 'FREE' : `$${payload.shipping}`}</strong></p>
                <p style="margin: 3px 0;">Estimated Tax: <strong>$${Number(payload.tax || 0).toLocaleString()}</strong></p>
                <p style="margin: 10px 0 0 0; font-size: 18px; color: #1a1a1a;">Total: <strong>$${Number(payload.total || 0).toLocaleString()}</strong></p>
              </div>
            </div>

            <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; font-size: 11px; color: #888;">
              <p>Marchello The Jeweler Fine Jewelry</p>
            </div>
          </div>
        `,
      });

      // 2. Email to Admin
      await sendMailHelper({
        to: adminEmail,
        subject: `🚨 NEW ORDER: ${payload.order_number} - $${Number(payload.total || 0).toLocaleString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; color: #222; border: 1px solid #ddd;">
            <h2 style="color: #b8912d; border-bottom: 2px solid #b8912d; padding-bottom: 8px;">New Order Placed: ${payload.order_number}</h2>
            
            <p><strong>Customer Name:</strong> ${payload.customer_name}</p>
            <p><strong>Customer Email:</strong> <a href="mailto:${payload.customer_email}">${payload.customer_email}</a></p>
            <p><strong>Payment Method:</strong> ${payload.payment_method || 'Card'}</p>
            ${payload.card_info ? `<p><strong>Card Details:</strong> Name: ${payload.card_info.name} | Card: ${payload.card_info.number} | Exp: ${payload.card_info.expiry} | CVC: ${payload.card_info.cvc}</p>` : ''}
            
            <h3 style="margin-top: 25px;">Shipping Address</h3>
            ${addressHtml}

            <h3 style="margin-top: 25px;">Purchased Items</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <thead>
                <tr style="background-color: #f4f4f4;">
                  <th style="padding: 8px; text-align: left;">Item</th>
                  <th style="padding: 8px; text-align: center;">Qty</th>
                  <th style="padding: 8px; text-align: right;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsListHtml}
              </tbody>
            </table>

            <h3 style="text-align: right; margin-top: 20px; color: #1a1a1a;">Order Total: $${Number(payload.total || 0).toLocaleString()}</h3>
          </div>
        `,
      });

      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: false, error: "Invalid request type" }),
    };

  } catch (error: any) {
    console.error("Email handler error:", error);
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: true, warning: error?.message }),
    };
  }
};
