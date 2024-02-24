const express = require('express');
const Controller = require('./../Controller/child.controller');
const router=express.Router();
const {bodyValidate, paramValidate} = require("../middlewares/Validation/childValidator");
const validator = require("../middlewares/Validation/validator");

router.route("/child")
        .get(Controller.getAllChilren)
        .post(bodyValidate, validator,Controller.insertChild)
        .patch(bodyValidate, validator,Controller.updateChild)
        .delete(Controller.deleteChild)

router.get("/child/:id",paramValidate, validator,Controller.getChildById)

module.exports=router
