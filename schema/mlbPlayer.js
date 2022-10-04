const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mlbPlayerSchema = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    number: {type: String, required: true},
    team: {type: String, required: true}
});

module.exports = mongoose.model("mlbPlayer", mlbPlayerSchema);