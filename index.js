const app = require("./app.js");
const fs = require("fs");
const XLSX = require("xlsx");
const axios = require("axios");
const db = require("./config/db.js");
const UserModel = require("./model/user.model.js");
const JobPreferencesModel = require("./model/job_preferences.model");
const JobPostModel = require("./model/job_post.model.js");

const port = 8000;

app.get("/", (req, res) => {
	res.send("Hello World!!!");
});

app.listen(port, () => {
	console.log(`Server Listening on Port http://localhost:${port}`);
});
