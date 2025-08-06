const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const Owner = mongoose.model("owners", OwnerSchema);
module.exports = Owner