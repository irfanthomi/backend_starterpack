const { pengajarModels, pengajarAddModels } = require("../../models/pengajar/pengajar");

exports.pengajarController = (req, res) => {
    let b = pengajarModels();
    b.then(value => {
        res.send({
            data: value,
            error: false,
        });
    }).catch(reason => {
        res.send({
            error: true,
            message: reason.message
        });
    });
};
exports.pengajarAddController = (req, res) => {

    let b = pengajarAddModels(req.body);
    b.then(value => {
        res.send({
            data: value,
            error: false,
        });
    }).catch(reason => {
        res.send({
            error: true,
            message: reason.message
        });
    });
};