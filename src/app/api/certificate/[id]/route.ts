import { NextResponse } from "next/server";
import clientPromise from "@/lib/connect";

// GET method to retrieve a single certificate by certId
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const certId = params.id;

    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db(); // Default database
    const certCollection = db.collection("certificates"); // Replace with your collection name

    // Fetch the certificate by certId (as a string)
    const cert = await certCollection.findOne({ certId });

    if (!cert) {
      return NextResponse.json(
        { error: "Certificate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(cert, { status: 200 });
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return NextResponse.json(
      { error: "Failed to fetch certificate" },
      { status: 500 }
    );
  }
}
