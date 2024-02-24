const Teacher=require("../Models/teacherSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const Class=require("../Models/classSchema")
// const Admin =require("../Models/adminSchem")

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


// exports.insertNewAdmin = (req, res, next) => {
//     const { email, password } = req.body;
//     const hashedPass = bcrypt.hashSync(password, 10);
//     const admin = new Admin({ email: email, password: hashedPass});

//     admin
//         .save()
//         .then((admin) => {
//             const token = jwt.sign(
//                 {
//                     id: admin._id,
//                     fullname: admin.fullName,
//                     role: "admin",
//                 },
//                 process.env.SECRET_KEY,
//                 { expiresIn: "1h" }
//             );
//             res.status(201).json({
//                 message: "Admin added successfully",
//                 admin,
//                 token
//             });
//         })
//         .catch((error) => {
//             next(error);
//         });
// };





exports.insertTeacher = (req, res, next) => {
        
        const imagePath = req.file.path;

        const { fullName, email, password } = req.body;
        bcrypt.hash(password, 10)
            .then((hashedPass) => {
                const teacher = new Teacher({
                    fullName,
                    email,
                    password: hashedPass,
                    image: imagePath,
                });
                return teacher.save();
            })
            .then((newTeacherData) => {
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
            })
            .catch((error) => {
                next(error);
            });
}

exports.updateTeacher = (req, res, next) => {
    const teacherId = req.body._id;
    const imagePath = req.file.path;

    Teacher.findById(teacherId)
        .then((teacher) => {
            if (!teacher) {
                throw new Error("teacher not found");
            }
            // Delete the previous image file
            fs.unlink(teacher.image, (error) => {
                if (error) {
                    console.error("Error deleting previous image:", error);
                }
            });
            // Update the child document with new image path
            teacher.image = imagePath;

            return teacher.save();
        })
        .then((updatedteacher) => {
            res.status(200).json({
                message: "teacher updated successfully",
                teacher: updatedteacher
            });
        })
        .catch((error) => {
            next(error);
        });
}
exports.deleteTeacher = (req, res, next) => {
    const teacherId = req.body._id;
    Teacher.findByIdAndDelete(teacherId)
        .then((teacher) => {
            if (!teacher) {
                throw new Error("Teacher not found");
            }
            // Delete the image file
            fs.unlink(teacher.image, (error) => {
                if (error) {
                    console.error("Error deleting image:", error);
                }
            });
            res.status(200).json({
                message: "Teacher deleted successfully",
                teacher
            });
        })
        .catch((error) => {
            next(error);
        });
}
exports.getSupervisors = (req, res, next) => {
    Class.find({}, { supervisor: 1 })
        .populate("supervisor", "name")
        .then((teachers) => {
            res.status(200).json(teachers);
        })
        .catch((error) => {
            next(error);
        });
};