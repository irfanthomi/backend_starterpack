const {createHash} = require("crypto");

/**
 *
 * @param {Buffer} buffer
 * @returns {string}
 */
function buffer_checksum(buffer) {
    let hash = createHash("md5");
    hash.update(buffer);
    return hash.digest("hex");
}

module.exports = {
    buffer_checksum
};
