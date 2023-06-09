const express = require("express");
const {
  submitApplication
} = require("../controllers/applicationController");
const router = express.Router();

// submit 
router.route("/").post(submitApplication);

module.exports = router;

