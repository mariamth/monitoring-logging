const { get } = require("../routes/authRoutes");
const endpointModel = require("./models/endpointModel");

const endpointController = {  
    getAllEndpoints: async (req, res) => {
        try {
            const endpoints = await endpointModel.find();
            res.json(endpoints);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    addURL: async (req, res) => {
        try {
            const newEndpoint = new endpointModel(req.body);
            await newEndpoint.save();
            res.status(201).json(newEndpoint);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateEndpoint: async (req, res) => {
        try {
            const updatedEndpoint = await endpointModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedEndpoint);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteEndpointById: async (req, res) => {
        try {
            await endpointModel.findByIdAndDelete(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getEndpointStatusById: async (req, res) => {
        try {
            const endpoint = await endpointModel.findById(req.params.id);
            res.json({ status: endpoint.status });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getEndpointLogsById: async (req, res) => {
        try {
            const logs = await endpointModel.findById(req.params.id).select("logs");
            res.json(logs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAverageResponseTimeById: async (req, res) => {
        try {
            const endpoint = await endpointModel.findById(req.params.id);
            const averageResponseTime = endpoint.logs.reduce((acc, log) => acc + log.responseTime, 0) / endpoint.logs.length;
            res.json({ averageResponseTime });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getEndpointStatusById: async (req, res) => {
        try {
            const endpoint = await endpointModel.findById(req.params.id);
            res.json({ status: endpoint.status });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getEndpointLogsById: async (req, res) => {
        try {
            const logs = await endpointModel.findById(req.params.id).select("logs");
            res.json(logs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAverageResponseTimeById: async (req, res) => {
        try {
            const endpoint = await endpointModel.findById(req.params.id);
            const averageResponseTime = endpoint.logs.reduce((acc, log) => acc + log.responseTime, 0) / endpoint.logs.length;
            res.json({ averageResponseTime });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = {
    endpointController
};