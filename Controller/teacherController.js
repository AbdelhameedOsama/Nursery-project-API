const Teacher=require("../Models/teacherSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.getAllTeachers=(req,res,next)=>{
    Teacher.find().then((teacher)=>{
        res.status(200).json(teacher)
    }).catch((error)=>{
        next(error)
    })

}

exports.getTeacherById=(req,res,next)=>{
    const id = req.params.id;
    Teacher.findById({ _id: id }) //returns a promise
    .then((teacher) => {
    if (!teacher) throw new Error("Id does not exist"); //this will be caught by catch block
    res.status(200).json(teacher);
    })
    .catch((error) => {
    next(error); //this will be caught by the error middleware
    });
}

exports.insertTeacher = async(req, res, next) => {
    
    const imagePath = req.file.path;

    const { fullName, email, password } = req.body;
    try {
      const hashedPass = await bcrypt.hash(password, 10);
      const teacher = new Teacher({
        fullName,
        email,
        password: hashedPass,
        image: imagePath,
      });
      const newTeacherData = await teacher.save();
      const token = jwt.sign(
        {
          id: newTeacherData._id,
          fullName: newTeacherData.fullName,
          role: "teacher",
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.status(201).json({ newTeacherData, token, message: "Teacher added successfully" });
    } catch (error) {
      next(error);
    }

}





exports.updateTeacher=(req,res,next)=>{
    Teacher.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((teacher) => {
        res.status(200).json({
            message: "Teacher updated successfully",
            teacher
        });
    })
    .catch((error) => {
        next(error);
    });
}

exports.deleteTeacher=(req,res,next)=>{
    Teacher.findByIdAndDelete(req.body._id)
    .then((teacher) => {
        res.status(200).json({
            message: "Teacher deleted successfully",
            teacher
        });
    })
    .catch((error) => {
        next(error);
    });
}

exports.getSupervisors=(req,res,next)=>{
    console.log("supervisors");
    res.status(200).json({data:[{},{},{},{},{}]})
}