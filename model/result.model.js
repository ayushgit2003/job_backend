const mongoose = require("mongoose");
const db = require("../config/db.js");

const Schema = mongoose.Schema;
// const { Schema } = mongoose;

const resultSchema = new Schema({
    userId: {
        type:Number,
        required: true,
    },
    jobIds: {
        type: Array,
        required: true,
    },
});

const resultModel = db.model("result", resultSchema);

module.exports = resultModel;