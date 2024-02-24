const express = require('express');
const Controller = require('./../Controller/child.controller');
const router=express.Router();
const {bodyValidate, paramValidate} = require("../middlewares/Validation/childValidator");
const validator = require("../middlewares/Validation/validator");
const{isAdmin}=require("../middlewares/Validation/authorizationMW")

router.route("/child")
        .get(Controller.getAllChilren)
        .post(isAdmin, bodyValidate, validator,Controller.insertChild)
        .patch(isAdmin,bodyValidate, validator,Controller.updateChild)
        .delete(isAdmin,Controller.deleteChild)

router.get("/child/:id",paramValidate, validator,Controller.getChildById)

module.exports=router
