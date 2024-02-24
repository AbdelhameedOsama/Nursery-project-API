const { body, param } = require("express-validator");


exports.bodyValidate = [
    body("fullName").isString().withMessage("Full Name must be a string")
        .isLength({ min: 3, max: 40 }).withMessage("Full Name must be between 3 to 40 characters"),
    body("email").isEmail().withMessage("Email must be a valid email"),
    body("password").isStrongPassword().withMessage("Password must be a strong password")
]

exports.paramValidate = [
    param("id").isNumeric().withMessage("Id must be a number")
]