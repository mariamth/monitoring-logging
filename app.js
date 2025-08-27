const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;
const users = require("./users");
const authenticateToken = require("./middleware/auth");


require("dotenv").config();

app.use(express.json());


app.listen(port, async () => {
    await connectDB();
    console.log('Click http://localhost:{port}')
});

