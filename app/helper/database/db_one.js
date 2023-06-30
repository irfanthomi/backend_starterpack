// noinspection DuplicatedCode

const mysql = require("mysql2");
const dbConfig = require("../../.secrets/db_one.secret");
const logger = require("../../config/winston");

const mysql_pool = mysql.createPool({
    connectionLimit: 100,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT || 3306
});

mysql_pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            logger.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            logger.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
            logger.error("Database connection was refused.");
        }
    }
    if (connection) connection.release();
});

// module.exports = connection;
module.exports = mysql_pool;