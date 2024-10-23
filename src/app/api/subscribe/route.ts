import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/connect"; // Path to your connect.ts file

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(); // Uses the default DB from the URI in connect.ts
    const collection = db.collection("subscribers");

    // Check if the email is already subscribed
    const existingSubscriber = await collection.findOne({ email });

    if (existingSubscriber) {
      return NextResponse.json(
        { message: "This email is already subscribed." },
        { status: 200 }
      );
    }

    // Insert the new subscriber into the database
    await collection.insertOne({ email, subscribedAt: new Date() });

    return NextResponse.json(
      { message: "Thank you for subscribing!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
