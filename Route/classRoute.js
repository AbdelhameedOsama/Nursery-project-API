const express = require('express');
const controller=require('./../Controller/classController')
const router=express.Router();
const {bodyValidate, paramValidate} = require("../middlewares/Validation/childValidator");
const validator = require("../middlewares/Validation/validator");
const{isAdmin}=require("../middlewares/Validation/authorizationMW")

router.route("/class")
        .get(controller.getAllClasses)
        .post(isAdmin,bodyValidate, validator,controller.insertClass)
        .delete(isAdmin,controller.deleteClass)
        .patch(isAdmin,bodyValidate, validator,controller.updateClass)

router.get("/class/child/:id",paramValidate, validator,controller.classChildren)
router.get("/class/teacher/:id",paramValidate, validator,controller.classSupervisor)
router.get("/class/:id",paramValidate, validator,controller.getClassById)






module.exports=router;