import { connectToDatabase } from '@/lib/mongo';
import {Job} from '@/models/job-post' // Adjust this import to match the path where your Job model is defined
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  // Connect to the database
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      // Get the job details from the request body
      const {
        title,
        description,
        requirements,
        location,
        country,
        jobType,
        salary,
        salaryCurrency,
        companyName,
        companyWebsite,
        experienceLevel,
        applicationDeadline,
        category,
        skillsRequired,
        createdBy,
      } = req.body;

      // Create a new Job document
      const job = new Job({
        title,
        description,
        requirements,
        location,
        country,
        jobType,
        salary,
        salaryCurrency,
        companyName,
        companyWebsite,
        experienceLevel,
        applicationDeadline,
        category,
        skillsRequired,
        createdBy,
      });

      // Save the job to the database
      await job.save();

      // Send a response back to the client
      res.status(201).json({ success: true, job });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
  }
}
