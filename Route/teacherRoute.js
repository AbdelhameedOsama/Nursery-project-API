const express = require('express');
const controller = require('./../Controller/teacherController');
const router=express.Router();


router.route("/teachers")
    .get(controller.getAllTeachers)
    .patch(controller.updateTeacher)
    .delete(controller.deleteTeacher)

router.get("/teachers/supervisors",controller.getSupervisors)

router.get("/teachers/:id",controller.getTeacherById)







module.exports=router;