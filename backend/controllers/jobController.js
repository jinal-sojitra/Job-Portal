const asyncHandler = require("express-async-handler");
const Job = require("../models/jobModal");

const createJob = asyncHandler(async (req, res) => {
  const { title, description, company, skills, experience, employmentType, location, packageOffered } =req.body;

  if (
    (!title ||
    !description||
    !company||
    !skills||
    !experience||
    !employmentType||
    !location||
    !packageOffered)
  ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const job = await Job.create({
    title,
    description,
    company,
    skills,
    experience,
    employmentType,
    location,
    packageOffered,
  });

  if (job) {
    res.status(201).json({
      _id: job._id,
      title: job.title,
      description: job.description,
      company: job.company,
      experience: job.experience,
      employmentType: job.employmentType,
      location: job.location,
      packageOffered: job.packageOffered,
    });
  } else {
    res.status(400);
    throw new Error("Job not found");
  }
});

const applyToJob = asyncHandler(async (req, res) => {
  
  const { user,job } = req.body;
  
  Job.findById(job)
    .then((job) => {
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      job.applicants.push(user);

      return job.save();
    })
    .then((updatedJob) => {
      res.json(updatedJob);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    });

})

const getJobDetails = asyncHandler(async (req, res) => {
try {
  const jobs = await Job.find();
  res.json(jobs);
} catch (error) {
  res.status(500).json({ error: "Failed to fetch jobs" });
}
});

const getJobById = asyncHandler(async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job" });
  }
});

const updateJob = asyncHandler(async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to update job" });
  }
});

const deleteJob = asyncHandler(async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete job" });
  }
});

module.exports = { createJob,applyToJob, getJobDetails, getJobById, updateJob, deleteJob };