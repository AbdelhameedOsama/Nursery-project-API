const express = require('express');
const controller = require('./../Controller/teacherController');
const router=express.Router();
const { bodyValidate, paramValidate } = require("../middlewares/Validation/teacherValidation");
const validator = require("../middlewares/Validation/validator");

router.route("/teachers")
    .get(controller.getAllTeachers)
    .patch(bodyValidate, validator,controller.updateTeacher)
    .delete(controller.deleteTeacher)

router.get("/teachers/supervisors",controller.getSupervisors)

router.get("/teachers/:id",paramValidate, validator,controller.getTeacherById)







module.exports=router;