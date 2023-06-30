// config.js
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + ".env")
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "127.0.0.1",
    PORT: process.env.PORT || 3001,
    REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD || "root",
    REDIS_DB: process.env.REDIS_DB || 1
};
