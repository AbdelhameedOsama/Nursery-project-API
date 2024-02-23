const express = require('express');
const controller=require('./../Controller/classController')
const router=express.Router();

router.route("/class")
        .get(controller.getAllClasses)
        .post(controller.insertClass)
        .delete(controller.deleteClass)
        .patch(controller.updateClass)

router.get("/class/children",controller.classChildren)
router.get("/class/supervisor",controller.classSupervisor)
router.get("/class/:id",controller.getClassById)






module.exports=router;