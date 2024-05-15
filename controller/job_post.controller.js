const JobPostModel = require("../model/job_post.model");
const JobPostService = require('../services/job_post.services');


exports.createJobPost = async (req, res, next) => {
	try {
		const { 
		companyName,
		jobTitle,
		jobType,
		jobSkills,
		jobDescription,
		jobExperienceLevel,
		jobLocation,
            jobSalary } = req.body;
       const job = await JobPostService.checkUser(companyName, jobTitle, jobDescription);
		 

		if (job) {
			// const notExistError = new Error(
			// 	"job don't exist"
			// );
			// console.error(
			// 	"An error occurred:",
			// 	notExistError
			// );
			return res.status(404).json({
				"error": "Same Job Exist",
			});
		}
        
        const successRes = await JobPostService.createJobPost(
		companyName,
		jobTitle,
		jobType,
		jobSkills,
		jobDescription,
		jobExperienceLevel,
		jobLocation,
		jobSalary);
		return res.json({ success: "Job Post Added Successfully", successRes});
		console.log("Job Post created Successfully");
	} catch (error) {
			// Other errors, send internal server error response
			console.error("Error creating job post:", error);
			return res.status(500).json({
				error: "Error creating job post",
			});
	}
};
