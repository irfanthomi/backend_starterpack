const { validationResult } = require("express-validator");
const _res = require("../helper/response.helper");

module.exports.checkError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return _res.error(res, errors.array());
    }
    next();
};
