const express = require("express");
const router = express.Router();
const monitorController = require("./controllers/monitorController");

router.post("/monitor/run", monitorController.checkEndpoints);
router.post("/monitor/run/:id", monitorController.checkEndpointById);

module.exports = router;