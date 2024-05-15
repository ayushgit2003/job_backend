const router = require("express").Router();
const JobPreferencesModel = require("../model/job_preferences.model");
const JobPreferencesService = require("../services/job_preferences.services");


router.put("/updatePreference", async (req, res) => {
	try {
		const {
			userId,
			skills,
			jobTitles,
			experienceLevel,
			locations,
		} = req.body;

		// Check if userId exists
		const user = await JobPreferencesModel.findOne({ userId });

		// if (!user) {
		//   return res.status(404).json({ message: 'User not found' });
		// }

		// Update user data
		if (user) {
			user.skills = skills;
			user.jobTitles = jobTitles;
			user.experienceLevel = experienceLevel;
			user.locations = locations;
			// Save updated user data
			await user.save();

			return res
				.status(200)
				.json({
					message: "User updated successfully",
				});
		} else {
			const successRes =
				await JobPreferencesService.createJobPreferences(
					userId,
					skills,
					jobTitles,
					experienceLevel,
					locations
				);
			return res.json({
				success: "Job Preferences Updated Successfully",
				successRes,
			});
		}
	} catch (error) {
		console.error("Error:", error);
		return res
			.status(500)
			.json({ message: "Internal server error" });
	}
});

module.exports = router;
