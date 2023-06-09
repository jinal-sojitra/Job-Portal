const asyncHandler = require("express-async-handler");
const Application = require("../models/jobApplication");

const submitApplication = asyncHandler(async (req, res) => {
  const {
    user,job
    } = req.body;
    

  const application = await Application.create({
   user,job
  });

  if (application) {
    res.status(201).json({
        _id: application._id,
        user:application.user, 
        jobId:application.jobId
    });
  } else {
    res.status(400);
    throw new Error("Application not found");
  }
});



module.exports = {
  submitApplication
};
