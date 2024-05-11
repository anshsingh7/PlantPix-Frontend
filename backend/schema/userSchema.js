const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    slug:{
        type: String, 
        lowercase: true
    },
    email:{
        type: String,
        unique: [true, "Email should be unique"],
        required: [true, "Email is required"]
    }, password:{
        type: String,
        required: [true, "Password is required"]
    }, phone:{
        type: Number,
        unique: [true, "Phone number should be unique"],
        required: [true, "Phone is required"]
    }, gender:{
        type: String,
        required: [true, "Gender is required"]
    }, age:{
        type: String,
        required: [true, "Age is required"]
    },photo:{
        data: Buffer,
        contentType: String
    }
},{timestamps: true});

module.exports = mongoose.model("User", userSchema);