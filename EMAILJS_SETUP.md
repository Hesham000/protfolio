# EmailJS Setup Guide

## Overview
Your contact form is now integrated with EmailJS, a free email service that allows you to send emails directly from your website without a backend server.

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup wizard to connect your email account
5. Copy the **Service ID** (you'll need this later)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

New contact form submission from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Update Environment Variables
Update your `.env.local` file with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### 6. Test the Contact Form
1. Restart your development server: `npm run dev`
2. Go to your contact section
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Available
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (where messages are sent)

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Upgrade Options
- Pro plan: $20/month for 1000 emails
- Remove EmailJS branding
- Priority support

## Security Notes
- Your EmailJS credentials are safe to use in frontend code
- Public key is designed to be exposed
- Service and Template IDs are also safe to expose
- No sensitive information is required in your frontend

## Troubleshooting
- Make sure environment variables are properly set
- Restart development server after updating `.env.local`
- Check EmailJS dashboard for any service issues
- Verify your email service is properly connected
- Check browser console for any error messages 