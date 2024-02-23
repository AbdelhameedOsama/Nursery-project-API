const express = require('express');
const morgan = require('morgan');
const cors = require("cors")
const teacherRoute = require('./Route/teacherRoute');
const childRoute = require('./Route/childRoute');
const classRoute =require("./Route/classRoute")
//create server
const server=express();

//listen to port number

const port=process.env.port||8080
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


//build server
server.use((request,response,next)=>{
    console.log("First use function", request.url,request.method);
   
    next();
});

//----------------------------------------settings
server.use(express.json())
server.use(cors());
server.use(morgan("dev"));


//routes
server.get("/",(request,response)=>{
    response.send("happy")
    
})

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



