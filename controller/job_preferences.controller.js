const JobPreferencesService = require('../services/job_preferences.services');
const JobPreferencesModel = require('../model/job_preferences.model');
const UserModel = require("../model/user.model");



exports.createJobPreferences = async (req, res, next) => {
	try {
		const { userId, skills, jobTitles, experienceLevel, locations } = req.body;
        const successRes = await JobPreferencesService.createJobPreferences(userId, skills, jobTitles, experienceLevel,locations);
		return res.json({ success: "Job Preferences Updated Successfully", successRes});
		console.log("TodoList created Successfully");
	} catch (error) {
			// Other errors, send internal server error response
			console.error("Error registering user:", error);
			return res.status(500).json({
				error: "Internal Server Error",
			});
	}
};

