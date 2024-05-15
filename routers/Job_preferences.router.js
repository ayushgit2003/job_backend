const router = require('express').Router();
const JobPreferencesController = require('../controller/job_preferences.controller');

router.post('/createJobPreferences', JobPreferencesController.createJobPreferences);

module.exports = router;