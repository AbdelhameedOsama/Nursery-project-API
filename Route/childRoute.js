const express = require('express');
const Controller = require('./../Controller/child.controller');
const router=express.Router();


router.route("/children")
        .get(Controller.getAllChilren)
        .post(Controller.insertChild)
        
router.get("/children/:id",Controller.getChildById)
router.patch("/children/:id",Controller.updateChild)
router.delete("/children/:id",Controller.deleteChild)





module.exports=router