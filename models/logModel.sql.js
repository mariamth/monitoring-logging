const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

    const seq = new Sequelize('films', process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: "mysql"
    });
    