import { NextResponse } from "next/server";
import clientPromise from "@/lib/connect";

export async function GET() {
  const db_name = process.env.DB_NAME;
  try {
    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db(db_name); // Replace with your database name

    // Fetch projects collection
    const projects = await db.collection("services").find({}).toArray();

    // Send the response
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch services",
    });
  }
}
