import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/connect";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const db_name = process.env.DB_NAME;

  try {
    const { firstName, lastName, phone, message, browserInfo, coords } =
      await req.json();

    if (!firstName || !lastName || !phone || !message || !coords) {
      return NextResponse.json(
        { error: "All fields and location access are required." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(db_name);

    // Clean up blocked IPs older than 30 days
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days
    await db.collection("blocked_ips").deleteMany({
      blockedAt: { $lt: thirtyDaysAgo },
    });

    // Get the user's IP address from headers
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Check if IP is blocked
    const blockedIp = await db.collection("blocked_ips").findOne({ ip });
    if (blockedIp) {
      return NextResponse.json(
        { error: "Your IP has been blocked due to suspicious activity." },
        { status: 403 }
      );
    }

    // Check if IP sent multiple messages within the last minute
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    const recentMessage = await db.collection("contact_logs").findOne({
      ip,
      createdAt: { $gte: oneMinuteAgo },
    });

    if (recentMessage) {
      // Block the IP if a message was already sent within the last minute
      await db
        .collection("blocked_ips")
        .insertOne({ ip, blockedAt: new Date() });
      return NextResponse.json(
        { error: "Your IP has been blocked due to sending multiple messages." },
        { status: 429 }
      );
    }

    // Log the IP and browser information
    await db.collection("contact_logs").insertOne({
      ip,
      browserInfo,
      messageDetails: { firstName, lastName, phone, message },
      coords,
      createdAt: new Date(),
    });

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
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
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
