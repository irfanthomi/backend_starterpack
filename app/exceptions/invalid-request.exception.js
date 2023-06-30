class InvalidRequestException extends Error{
    /**
     * @param {string} message
     * @param {object} data
     */
    constructor(message, data) {
        super(message);
        this.name = "INVALID_REQUEST";
        this.data = data;
    }
}

module.exports = {
    InvalidRequestException
};