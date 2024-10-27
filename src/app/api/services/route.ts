import { NextResponse } from "next/server";
import clientPromise from "@/lib/connect";

export async function GET() {
  const db_name = process.env.DB_NAME;
  try {
    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db(db_name);

    // Fetch both services and more_services collections
    const services = await db.collection("services").find({}).toArray();
    const moreServices = await db
      .collection("more_services")
      .find({})
      .toArray();

    // Send the response with both collections
    return NextResponse.json({
      success: true,
      data: {
        services,
        moreServices,
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch services data",
    });
  }
}
