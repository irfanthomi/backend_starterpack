const db_unes = require("./db1.js");
const Promise = require("promise");
const logger = require("../winston.js");

function params_valid(params) {
    for (const param of params) {
        if (param === undefined) {
            return false;
        }
    }
    return true;
}

/**
 *
 * @param {string} query - sql query
 * @param {Array<string>} parameters - query parameters
 * @param {number} [param_length] - parameter length
 * @returns {Promise<Array>} promise - of value
 */
async function db_pengajar(query, parameters, param_length = 0) {
    return new Promise((resolve, reject) => {
        if (param_length > 0 && parameters.length !== param_length) {
            logger.error("parameter mismatch");
            reject(`parameter length mismatch ${query} with params ${parameters}`);
        } else {
            if (!params_valid(parameters)) {
                reject(`parameters is invalid/undefined ${parameters} call ${query}`);
            } else {
                db_unes.query(query, parameters, (err, res) => {
                    if (err) {
                        logger.error(`error db unes: ${err} at query ${query}`);
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            }
        }
    });
}




module.exports = {
    db_pengajar,
};