const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const RECIPIENT_EMAIL = 'jagadeeshporalla2@gmail.com';

app.use(cors());
app.use(express.json());

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.warn(
    'Warning: EMAIL_USER and EMAIL_PASSWORD must be set in .env for email delivery to work.'
  );
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', recipient: RECIPIENT_EMAIL });
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    return res.status(500).json({
      error: 'Email server is not configured. Set EMAIL_USER and EMAIL_PASSWORD in .env',
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Check Gmail app password in .env' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Emails will be delivered to ${RECIPIENT_EMAIL}`);
});
