const router = require("express").Router();
const matchController = require("../controller/match_controller");
const JobPostModel = require("../model/job_post.model");
const JobPostService = require("../services/job_post.services");


router.post("/recommend", matchController);
router.get('/jobPosts', async (req, res) => {
    try {
        // Fetch all users from the database
        const jobPosts = await JobPostModel.find();
        // Return the list of users as JSON
       return res.json(jobPosts);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
