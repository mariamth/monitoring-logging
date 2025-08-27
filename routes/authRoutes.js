const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");

router.post("/auth/register", authController.createUser);
router.post("/auth/login", authController.returnUser);



module.exports = router;