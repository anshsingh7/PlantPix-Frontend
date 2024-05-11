const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.dbConnectionUrl

const connectDB =async ()=>{
    try{
        const conn =await  mongoose.connect(url);
        console.log("database connected successfully");
        console.log(`host Name => ${conn.connection.host}`);
    }catch(error){
        console.log(`database connection error: ${error}`);
    }
}

module.exports = connectDB;