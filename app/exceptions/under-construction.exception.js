class UnderConstructionException extends Error {
    /**
     * @param {string} message
     * @param {object} data
     */
    constructor(message, data) {
        super(message);
        this.name = "UNDER_CONSTRUCTION_EXCEPTION";
        this.data = data;
    }
}

module.exports = {
    UnderConstructionException
};