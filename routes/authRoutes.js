
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticateToken = require("../middleware/auth");

router.post("/auth/register", authController.createUser);
router.post("/auth/login", authController.returnUser);
router.get("/auth/endpoint", authenticateToken, authController.protectedEndpoint);
router.get("/auth/status", authenticateToken, authController.protectedStatus);
router.get("/auth/logs", authenticateToken, authController.protectedLogs);


module.exports = router;
