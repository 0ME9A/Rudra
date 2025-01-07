import { NextResponse } from "next/server";
import clientPromise from "@/lib/connect";

// Fetch testimonials with a limit
export async function GET(request: Request) {
  const db_name = process.env.DB_NAME;

  // Parse the URL and extract the limit from the query parameters
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10); // Default to 10 if no limit is provided
  const page = parseInt(searchParams.get("page") || "1", 10); // Default to page 1 if no page is provided

  try {
    // Validate the limit and page values
    if (limit <= 0 || page <= 0) {
      return NextResponse.json({
        success: false,
        message: "Limit and page must be positive integers",
      });
    }

    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db(db_name);

    // Calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // Fetch testimonials collection with the limit
    const testimonials = await db
      .collection("testimonials")
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    // Get the total count of projects for pagination metadata
    const totalTestimonials = await db
      .collection("testimonials")
      .countDocuments();
    const totalPages = Math.ceil(totalTestimonials / limit);

    // Send the response with pagination metadata
    return NextResponse.json({
      success: true,
      data: testimonials,
      pagination: {
        totalTestimonials,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to fetch testimonials",
    });
  }
}
