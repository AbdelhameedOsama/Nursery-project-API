const express = require('express');
const controller = require('./../Controller/teacherController');
const router=express.Router();


router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(controller.insertTeacher);

router.get("/teachers/supervisors",controller.getSupervisors)

router.get("/teachers/:id",controller.getTeacherById)

router.patch("/teachers/:id",controller.updateTeacher)

router.delete("/teachers/:id",controller.deleteTeacherById)





module.exports=router;