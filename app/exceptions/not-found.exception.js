class NotFoundException extends Error{
    /**
     * @param {string} message
     * @param {object} [data]
     */
    constructor(message, data) {
        super(message);
        this.name = "NOT_FOUND_EXCEPTION";
        this.data = data;
    }
}

module.exports = {
    NotFoundException
};