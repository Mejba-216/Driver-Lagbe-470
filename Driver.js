const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const Driver = mongoose.model("drivers", DriverSchema);
module.exports = Driver