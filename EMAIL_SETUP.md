# Email Setup Guide

This personal website now includes email functionality. Here's how to set it up:

## Setup Steps

### 1. Generate Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Under "App passwords", select:
   - App: Mail
   - Device: Windows Computer (or your device)
5. Google will generate a 16-character password
6. Copy this password

### 2. Configure .env File

Open the `.env` file in the project root and update it:

```
EMAIL_USER=jagadeeshporalla2@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

Replace `your_16_character_app_password` with the password generated in step 1.

### 3. Run the Project

#### Development Mode (Backend + Frontend together):
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:3001`
- Frontend React app on `http://localhost:3000`

#### Or run them separately:

**Terminal 1 (Backend):**
```bash
npm run server
```

**Terminal 2 (Frontend):**
```bash
npm start
```

## How It Works

1. User fills out the contact form
2. Form data is sent to the backend server at `http://localhost:3001/api/send-email`
3. Backend uses Nodemailer to send an email to `jagadeeshporalla2@gmail.com`
4. The email includes:
   - Visitor's name
   - Visitor's email (for reply-to)
   - Visitor's message

## Troubleshooting

**"Error: connect ECONNREFUSED"**
- Make sure the backend server is running on port 3001
- Run `npm run dev` or `npm run server` in a separate terminal

**"Error: Invalid login"**
- Verify your .env file has the correct Gmail and app password
- Make sure you're using an App Password, not your regular Gmail password

**"Email not received"**
- Check the email is being sent to the correct address
- Check your Gmail spam folder
- Verify the .env credentials are correct

## Deployment

When deploying to Vercel or Netlify:

1. You'll need to set up a backend separately (Vercel Functions, Heroku, etc.)
2. Update the API endpoint in `ContactModal.js` to point to your deployed backend
3. Add environment variables to your hosting platform

Or use a service like:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [SendGrid](https://sendgrid.com/)

## Security Note

Never commit the `.env` file to GitHub. It's already in `.gitignore`, but always verify before pushing.
