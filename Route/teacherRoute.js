const express = require('express');
const controller = require('./../Controller/teacherController');
const router=express.Router();
const { bodyValidate, paramValidate } = require("../middlewares/Validation/teacherValidation");
const validator = require("../middlewares/Validation/validator");
const{isAdmin}=require("../middlewares/Validation/authorizationMW")


router.route("/teachers")
    .all(isAdmin)
    .get(controller.getAllTeachers)
    .patch(bodyValidate, validator,controller.updateTeacher)
    .delete(controller.deleteTeacher)

router.get("/teachers/supervisors",isAdmin,controller.getSupervisors)

router.get("/teachers/:id",isAdmin,paramValidate, validator,controller.getTeacherById)







module.exports=router;