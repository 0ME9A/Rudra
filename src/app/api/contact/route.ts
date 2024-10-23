import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, message } = await req.json();

    if (!firstName || !lastName || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Environment variable for email
        pass: process.env.EMAIL_PASS, // Environment variable for password
      },
    });

    // Email content with priority/importance
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Client Enquiry from ${firstName} ${lastName}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2 style="color: #0056b3;">Client Enquiry</h2>
      <p>Dear Sir,</p>
      <p>You have received a new client enquiry. Here are the details:</p>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p style="color: #555;">Please follow up with the client at your earliest convenience.</p>
      <hr style="border: none; border-top: 1px solid #ddd;"/>
      <p style="font-size: 12px; color: #777;">This is an automated message. Please do not reply.</p>
    </div>
  `,
      headers: { "X-Priority": "1", Importance: "high" },
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
