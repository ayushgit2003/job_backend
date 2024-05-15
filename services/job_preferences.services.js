const JobPreferencesModel = require("../model/job_preferences.model");
const UserModel = require("../model/user.model");

class JobPreferencesService{
    static async createJobPreferences( userId, skills, jobTitles, experienceLevel,locations) {
        try {
            const newpreference = new JobPreferencesModel({userId, skills, jobTitles, experienceLevel,locations });
            const savedpreference = await newpreference.save();
            return savedpreference;
        }
        catch(error){
             console.error("Error creating todo Task:", error);
            throw error; 
        }
    }


}
module.exports = JobPreferencesService;