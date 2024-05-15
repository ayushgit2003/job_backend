const JobPostModel = require("../model/job_post.model");
const resultModel = require("../model/result.model")

const matchController = async (req, res) => {
    const { userId } = req.body;
    const recommendedJobs = {};
    
    try {
        const user = await resultModel.findOne({ userId });
        if (user) {
            for (const jobId of user.jobIds) {
                const job = await JobPostModel.findOne({ jobId });
                if (job) {
                    recommendedJobs[jobId] = job;
                }
            }
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ recommendedJobs });
    } catch (error) {
        console.error('Error in matchController:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports=matchController