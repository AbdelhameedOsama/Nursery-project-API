const express = require('express');
const Controller = require('./../Controller/child.controller');
const router=express.Router();
const upload=require("../middlewares/imageMiddleware")

router.route("/child")
        .get(Controller.getAllChilren)
        .post(Controller.insertChild)
        .patch(Controller.updateChild)
        .delete(Controller.deleteChild)
        


router.get("/child/:id",Controller.getChildById)






module.exports=router