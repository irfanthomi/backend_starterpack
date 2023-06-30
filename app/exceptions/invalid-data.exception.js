class InvalidDataException extends Error {
    constructor(message, data) {
        super(message);
        this.name = "InvalidDataError";
        this.data = data;
    }
}

module.exports = InvalidDataException;
