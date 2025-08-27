const express = require("express");
const router = express.Router();
const endpointController = require("./controllers/endpointController");

router.get("/endpoints", endpointController.getAllEndpoints);
router.post("/endpoints", endpointController.addURL);
router.patch("/endpoints/:id", endpointController.updateEndpoint);
router.delete("/endpoints/:id", endpointController.deleteEndpointById);
router.get("/status/:id", endpointController.getEndpointStatusById);
router.get("/logs/:id", endpointController.getEndpointLogsById);
router.get("/logs/:id/status", endpointController.getAverageResponseTimeById);

module.exports = router;