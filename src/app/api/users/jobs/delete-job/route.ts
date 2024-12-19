// api/users/jobs/delete-job

import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
    await connectToDatabase();
    
  try {
    const {jobId } = await req.json();

    // Validate Job-id
    if (!jobId) {
      return NextResponse.json({
        message: "job ID are required",
        status: false,
      });
    }
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return NextResponse.json({
        message: "Invalid Job Id",
        status: false,
      });
    }
    const JobPost = await Job.findByIdAndDelete({_id:jobId});
    if(!JobPost){
      return NextResponse.json({message:"Post not found",status:false})
    }
    return NextResponse.json({
      message: "Job Post deleted successfully",
      status: true,
      JobPost,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error",
      status: false,
    });
  }
};
