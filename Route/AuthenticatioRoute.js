const jwt =require("jsonwebtoken");
const express =require("express")

const router = express.Router();

router.post("/login", AuthenticationController.login);

module.exports = router;