const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next){
    const authHeader = req.headers["authorization"];
    //Bearer JWTInformation - this is the format of the token
    const token = authHeader?.split(" ")[1];

    if (!token) return res.status(401).json({ error: "missing token" });

    jwt.verify(token, process.env.JWT_Secret, (err, user) => {
        if (err) return res.status(401).json({ error: "invalid token " });
    });

    req.user = user;
    next();
}

module.exports = authenticateToken;