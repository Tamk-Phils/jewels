// Quick SMTP connectivity test for Spacemail
// Run with: node scripts/test-smtp.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.spacemail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: 'support@marchell0thejeweler.com',
    pass: 'Marc1234?',
  },
});

console.log('Verifying SMTP connection to Spacemail...');
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP connection FAILED:', error.message);
  } else {
    console.log('✅ SMTP connection verified. Sending test email...');
    transporter.sendMail({
      from: '"Marchello Test" <support@marchell0thejeweler.com>',
      to: 'support@marchell0thejeweler.com',
      subject: 'SMTP Test — Marchello Platform',
      text: 'This is a test email from the Marchello website automated mail system. SMTP is working!',
    }, (err, info) => {
      if (err) {
        console.error('❌ Failed to send test email:', err.message);
      } else {
        console.log('✅ Test email sent! Message ID:', info.messageId);
      }
    });
  }
});
