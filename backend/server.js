const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const routes = require('./router/auth');
const connectDB = require('./config/db')
require('dotenv').config();


const app = express();
connectDB();

//middleware
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1', routes);

app.use('/', (req,res)=>{
    req.send("server is running at localhost")
});

const port = process.env.PORT || 8000;
app.listen(port , ()=>{
        console.log(`server is running at ${port}`.bgGreen);
})
