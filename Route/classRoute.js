const express = require('express');
const controller=require('./../Controller/classController')
const router=express.Router();

router.route("/classes")
        .get(controller.getAllClasses)
        .post(controller.insertClass);
router.get("/classes/children",controller.classChildren)
router.get("/classes/supervisor",controller.classSupervisor)
router.get("/classes/:id",controller.getClassById)
router.patch("/classes/:id",controller.updateClass)
router.delete("/classes/:id",controller.deleteClass)





module.exports=router;