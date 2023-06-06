const express = require("express");
const { createJob, getJobDetails, updateJob, getJobById, deleteJob} = require("../controllers/jobController");
const router = express.Router();

// Create a new job
router.route("/").post(createJob);

// Get all jobs
router.route("/").get(getJobDetails);

// Get a single job by ID
router.route("/:id").get(getJobById);

// Update a job by ID
router.route("/:id").put(updateJob);

// Delete a job by ID
router.route("/:id").delete(deleteJob);

module.exports = router;
