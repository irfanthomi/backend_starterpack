function success(res, data, status = 200) {
    res
        .status(200)
        .send({
            data: data || null,
            error: false,
            message: "Sukses"
        });
}

function error(res, message, status = 400) {
    res
        .status(status)
        .send({
            message: message,
            error: true
        });
}

function errorParam(res, validate) {
    res
        .status(400)
        .send({
            message: "missing parameter",
            validate
        });
    return;
}

module.exports = {
    success,
    error,
    errorParam
};
