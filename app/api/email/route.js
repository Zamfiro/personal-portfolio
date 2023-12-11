import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: `Message from (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err);
        }
      });
    });

  try {
     sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}