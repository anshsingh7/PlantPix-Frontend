const User = require("../schema/userSchema");
const {hashPassword}= require("../middleware/authHelper");
const { request } = require("express");
const slugify = require("slugify");
const fs = require("fs");

// Route : "/api/v1/register"
const registerController =async (req, res) => {
  try {
    const {name, email, password, phone, gender, age} =await req.fields;
    const {photo} =await req.files;

    switch(true){
      case !name:
          return res.status(500).send({error: "Name is required"});
      case !email:
          return res.status(500).send({error: "Email is required"});
      case !password:
          return res.status(500).send({error: "Password is required"});
      case !phone:
          return res.status(500).send({error: "Phone is required"});
      case !gender:
          return res.status(500).send({error: "Gender is required"});
      case !age:
          return res.status(500).send({error: "Age is required"});
      case photo && photo.size>3000000:
        return res.status(500).send({error: "Photo is required and should be less than 3mb"});
    }

    const existingUser = User.findOne({email});
    if(existingUser){
      return res.status(200).send({
        success: true,
        message: "User already exists",
    })
    }
    
    const hasedPassword = hashPassword(password)

    const user = await new User({name, email, password: hasedPassword, phone, gender, age,slug: slugify(name)});
    
    if(photo){
      user.photo.data=fs.readFileSync(photo.path);
      user.photo.contentType = photo.type;
    }

    await user.save();
    res.status(201).send({
      success: true,
      message: 'User saved successfully',
      user
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in creating user',
      error
    });
  }
};

// Route : "/api/v1/login"
const loginController = (req, res) => {
  try {
    console.log("login");
  } catch (error) {}
};

module.exports = { registerController, loginController };
