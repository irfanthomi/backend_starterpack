// 
const secret = require("../app/.secrets/unes_registrasi.secret");
const fs = require("fs");
const mysql = require("mysql");
const { exit } = require("process");


/**
 * 
 * @param {} _query 
 * @param {mysql.Connection} connection 
 * @returns 
 */
async function query(_query, values, connection) {
    return new Promise((resolve, reject) => {
        connection.query(_query,
            values, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
    });
}

async function main() {
    const connection = mysql.createConnection({
        host: secret.HOST,
        user: secret.USER,
        password: secret.PASSWORD,
        database: secret.DB
    });
    connection.connect();
    let files = fs.readdirSync("stored_procedures/registrasi/");
    for (const file of files) {
        let text = fs.readFileSync(`stored_procedures/registrasi/${file}`);
        // console.log();
        let res = await query(
            `DROP PROCEDURE IF EXISTS ${file.replace(".sql", "")}`, 
            [], 
            connection);
        // console.log(res);
        let res2 = await query(
            text.toString("utf8"),
            [],
            connection
        );
        console.log(res2);
    }
    exit(0);
}

main();
