const express = require('express');
const morgan = require('morgan');
const cors = require("cors")
const teacherRoute = require('./Route/teacherRoute');
const childRoute = require('./Route/childRoute');
const classRoute =require("./Route/classRoute")
const mongoose = require('mongoose');
require("dotenv").config();
const upload = require("./middlewares/imageMiddleware");
const { insertTeacher,insertNewAdmin } = require('./Controller/teacherController');
const {bodyValidate} = require("./middlewares/Validation/teacherValidation");
const validator = require("./middlewares/Validation/validator");
const authenticateRoute=require("./Route/authenticateRoute");
const authorization= require("./middlewares/Validation/authorizationMW");

//create server
const server=express();

//listen to port number
const port =process.env.port || 8080;

mongoose
    .connect(process.env.DB_URL).then(()=>{
        console.log("Connected to the database");
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            })
        }).catch((error)=>{
            console.log("couldn't connect to DB");
        })


//----------------------------------------settings
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(upload.single("image"));

//teacher register
server.post("/teachers",bodyValidate, validator,insertTeacher)

//authentication
server.use(authenticateRoute);

//authorization
server.use(authorization);
//routes

server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);

//not found
server.use((request,response,next)=>{
    console.log("not found");
    response.status(404).json({msg:"not found"})
})
//error callback 
server.use((error,request,response,next)=>{
    console.log("error handler");
    response.status(500).json(error+"")
})



