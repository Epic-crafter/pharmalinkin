import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";
import { CompanyProfile } from "@/models/company-profile"; // Import company profile model
import { getToken } from "next-auth/jwt";
import path from "path";
import DatauriParser from "datauri/parser";
import {cloudinary} from "@/lib/actions/cloudinary";

// POST request handler for creating a new job post
export async function POST(req: NextRequest) {
  try {
    // Get token from request
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Validate the token
    if (!token) {
      return NextResponse.json(
        { message: "Invalid User! Please login again.", status: false },
        { status: 401 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Fetch company profile using the user id from token
    const companyProfile = await CompanyProfile.findOne({ user: token.id });

    // If company profile does not exist, return an error
    if (!companyProfile) {
      return NextResponse.json(
        { success: false, message: "No company profile found for this user." },
        { status: 404 }
      );
    }

    // Parse the request body
    // const {
    //   title,
    //   description,
    //   requirements,
    //   location,
    //   country,
    //   jobType,
    //   jobcategory,
    //   salary,
    //   salaryCurrency,
    //   experienceLevel,
    //   applicationDeadline,
    //   category,
    //   skillsRequired,
    //   image,
    // } = await req.json();
    
    //  console.log("--------->",image);
    
    const formData = await req.formData(); 
    const data:any = {};
    for(let [key,value] of formData.entries()){
      data[key] = value;
    }
    // Destructring the data from formData
    const { 
      title,
      description,
      requirements,
      location,
      country,
      jobType,
      jobcategory,
      salary,
      salaryCurrency,
      companyName,
      companyWebsite,
      experienceLevel,
      address,
      contactperson,
      mobile,
      email,
      postalcode,
      salaryoffer,
      qualification,
      experience,
      status,
      skillsRequired,
      applicationDeadline,
      category,
      coverimage,
      video,
      image,
      file,
      closingdate,
      postedDate
      } = data;
    
      // Creating uploading function on cloudinary
    if(!image || !video){
        return NextResponse.json({error:"Image and video is required",data:null},{status:400});
    }
    const parser = new DatauriParser();

    // 1. Upload images on cloudinary.
    const Imagebuffer = Buffer.from(await image.arrayBuffer()); // Covert ArrayBuffer to ImageBuffer

    // Upload the new image
    const base64Image = parser.format(
      path.extname(image.name).toString(),
      Imagebuffer
    );

    if(!base64Image.content){
      return NextResponse.json({error:null,message:"Failed to parse"})
    }

    const createdImage =  await cloudinary.uploader.upload(
      base64Image.content,
      {
        resource_type:"image",
      }
    )

    // 2. Upload the video on cloudinary
    const Videobuffer = Buffer.from(await video.arrayBuffer());

    const base64Video = parser.format(
      path.extname(video.name).toString(),
      Videobuffer
    );

    if(!base64Video.content){
      return NextResponse.json({error:null,message:"Failed to parse"})
    }

    const createdVideo =  await cloudinary.uploader.upload(
      base64Video.content,
      {
        resource_type:"video",
      }
    )

    // 3. Upload files on cloudinary
    const filebuffer = Buffer.from(await file.arrayBuffer());

    const base64file = parser.format(
      path.extname(file.name).toString(),
      filebuffer
    );

    if(!base64file.content){
      return NextResponse.json({error:null,message:"Failed to parse"})
    }

    const createdfile =  await cloudinary.uploader.upload(
      base64Video.content,
      {
        resource_type:"auto",
      }
    )

    //  4. Upload CoverImages on cloudinary
     const coverimagebuffer = Buffer.from(await coverimage.arrayBuffer());

    const base64coverImage = parser.format(
      path.extname(coverimage.name).toString(),
      coverimagebuffer
    );

    if(!base64coverImage.content){
      return NextResponse.json({error:null,message:"Failed to parse"})
    }

    const createdcoverImage =  await cloudinary.uploader.upload(
      base64coverImage.content,
      {
        resource_type:"image",
      }
    )

  //   // Validate if all required fields are present before creating the Job document
    if (
      !title ||
      !description ||
      !requirements ||
      !location ||
      !country ||
      !category
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new Job document with companyName and companyWebsite from the company profile
    const job = new Job({
      title,
      description,
      requirements,
      location,
      country,
      jobcategory,
      jobType,
      salary,
      salaryCurrency,
      companyName: companyProfile.companyName, // Set company name from company profile
      companyWebsite: companyProfile.website,  // Set company website from company profile
      experienceLevel,
      applicationDeadline,
      category,
      address,
      contactperson,
      mobile,
      email,
      postalcode,
      salaryoffer,
      qualification,
      experience,
      status,
      skillsRequired,
      closingdate,
      postedDate,
      createdBy: token.id,
      company:companyProfile.id,
      coverimageurl:createdcoverImage.secure_url, // set coveimagerurl from the cloudinary
      videourl:createdVideo.secure_url,  // set videourl from the cloudinary
      imageurl:createdImage.secure_url, // set galleryimageurl from the cloudinary
      fileurl:createdfile.secure_url, // set fileurl from the cloudinary
    });

    // Save the job to the database
    await job.save();

    // Send a response back to the client
    return NextResponse.json({ success: true, job }, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { success: false, error: "Server error", message: error },
      { status: 500 }
    );
  }
}
