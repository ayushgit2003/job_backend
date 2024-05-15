const mongoose = require("mongoose");
const db = require("../config/db.js");

const Schema = mongoose.Schema;
// const { Schema } = mongoose;

const jobPostSchema = new Schema({
    jobId: {
        type:Number,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    jobSkills: {
        type: [String],
        required: true,
    },
	jobDescription: {
		type: String,
		required: true,
    },
    jobExperienceLevel: {
        type: String,
        required: true,
    },
    jobLocation: {
        type: String,
        required: true,
    },
	jobSalary: {
		type: String,
		required: true,
	},
});

const JobPostModel = db.model("jobPost", jobPostSchema);

module.exports = JobPostModel;