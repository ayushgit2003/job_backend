const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const jobpreferencesRouter = require('./routers/Job_preferences.router');
const jobprefput = require('./routers/preferences_put_api');
const jobPost = require('./routers/job_post.router');
const getJobPost = require('./routers/job_post_getapi');

const app = express();

app.use(body_parser.json());

app.use('/', userRouter);
app.use('/', jobpreferencesRouter);
app.use('/', jobprefput);
app.use('/', jobPost);
app.use('/', getJobPost);


module.exports = app;