class DataNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = "DataNotFoundError";
    }
}

module.exports = DataNotFoundException;
