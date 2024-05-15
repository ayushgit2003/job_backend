const mongoose = require("mongoose");
const db = require("../config/db.js");
const UserModel = require("../model/user.model");

const Schema = mongoose.Schema;
// const { Schema } = mongoose;

const jobPreferencesSchema = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    skills: {
        type: [String],  
        required: true
    },
    jobTitles: {
        type: [String],  
        required: true,
    },
    experienceLevel: {
        type: String,
        required: true,
    },
    locations: {
        type: [String],
        required: true,
    },
});

const JobPreferencesModel = db.model("jobPreference", jobPreferencesSchema);

module.exports = JobPreferencesModel;