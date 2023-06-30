class CallApiException extends Error{
    /**
     * @param {string} message
     * @param {object} data
     */
    constructor(message, data) {
        super(message);
        this.name = "CALL_API_EXCEPTION";
        this.data = data;
    }
}

module.exports = {
    CallApiException
};