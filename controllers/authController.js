const endpointModel = require();
const authController = {
	protectedEndpoint: (req, res) => {
		res.json({ message: "This is a protected endpoint", user: req.user });
	},
	protectedStatus: (req, res) => {
		res.json({ message: "This is a protected status", user: req.user });
	},
	protectedLogs: (req, res) => {
		res.json({ message: "This is a protected logs", user: req.user });
	}
};

module.exports = authController;