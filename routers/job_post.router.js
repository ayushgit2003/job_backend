const router = require('express').Router();
const JobPostController = require('../controller/job_post.controller');

router.post('/createJobPost', JobPostController.createJobPost);

module.exports = router;