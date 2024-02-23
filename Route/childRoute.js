const express = require('express');
const Controller = require('./../Controller/child.controller');
const router=express.Router();


router.route("/child")
        .get(Controller.getAllChilren)
        .post(Controller.insertChild)
        .patch(Controller.updateChild)
        .delete(Controller.deleteChild)
        


router.get("/child/:id",Controller.getChildById)






module.exports=router