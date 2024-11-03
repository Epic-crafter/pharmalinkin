import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";

// POST request handler for fetching jobs with multiple filters
export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const body = await req.json().catch(() => ({}));

    // Initialize the query object
    const query: any = {};

    // If the body is empty, you can skip filter construction
    if (body) {
      const {
        companyName,
        jobTitle,
        location,
        country,
        jobType,
        experienceLevel,
        status,
        applicationDeadline,
        salaryRange,
        category,
        page = 1, // Optional pagination
        limit = 10, // Optional limit for results
      } = body;

      // Build the query object with the filters
      if (companyName) query.companyName = { $regex: companyName, $options: "i" };
      if (jobTitle) query.title = { $regex: jobTitle, $options: "i" };
      if (location) query.location = { $regex: location, $options: "i" };
      if (country) query.country = { $regex: country, $options: "i" };
      if (jobType) query.jobType = jobType;
      if (experienceLevel) query.experienceLevel = experienceLevel;
      if (status) query.status = status;
      if (applicationDeadline) query.applicationDeadline = { $gte: new Date(applicationDeadline) };

      // Handle salary range filter
      if (salaryRange) {
        const [minSalary, maxSalary] = salaryRange.split('-').map(Number);
        query.salary = {};
        if (!isNaN(minSalary)) query.salary.$gte = minSalary;
        if (!isNaN(maxSalary)) query.salary.$lte = maxSalary;
      }

      if (category) query.category = { $regex: category, $options: "i" };
    }

    // Fetch jobs from the database, applying pagination
    const jobs = await Job.find(query)
      .populate('createdBy', 'name')
      // .skip((page - 1) * limit)
      // .limit(limit);

    const totalJobs = await Job.countDocuments(query); // Total count for pagination

    // Send response back to the client
    return NextResponse.json({ success: true, jobs, totalJobs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error },
      { status: 500 }
    );
  }
}
