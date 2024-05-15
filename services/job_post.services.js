const JobPostModel = require("../model/job_post.model");
const UserModel = require("../model/user.model");

class JobPostService {
	static async generateUniqueID() {
		const highestIDUser = await JobPostModel.findOne(
			{},
			{},
			{ sort: { jobId: -1 } }
		);
		const highestID = highestIDUser
			? highestIDUser.jobId
			: 7999; // If no user exists, start from 999
		return highestID + 1;
	}
	static async createJobPost(
		companyName,
		jobTitle,
		jobType,
		jobSkills,
		jobDescription,
		jobExperienceLevel,
		jobLocation,
		jobSalary
	) {
		try {
			const jobId =
				await JobPostService.generateUniqueID();
			const newjobPost = new JobPostModel({
				jobId,
				companyName,
				jobTitle,
				jobType,
				jobSkills,
				jobDescription,
				jobExperienceLevel,
				jobLocation,
				jobSalary,
			});
			const savedjobPost = await newjobPost.save();
			return savedjobPost;
		} catch (error) {
			console.error("Error creating todo Task:", error);
			throw error;
		}
	}
	static async checkUser(companyName, jobTitle, jobDescription) {
		try {
			// const checkResult=await UserModel({ email });
			// const checkResult=await UserModel.findOne({ email });
			const checkResult = await JobPostModel.findOne({
				companyName,
				jobTitle,
				jobDescription,
			});
			return checkResult;
		} catch (error) {
			console.error("Error registering user:", error);
			throw error;
		}
	}
}

module.exports = JobPostService;
