class UnauthorizedException extends Error {
    /**
     * @param {string} message
     * @param {object} data
     */
    constructor(message, data) {
        super(message);
        this.name = "UNAUTHORIZED_EXCEPTION";
        this.data = data;
    }
}

module.exports = {
    UnauthorizedException
};