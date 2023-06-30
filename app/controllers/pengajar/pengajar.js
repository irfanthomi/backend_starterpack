const { pengajarModels } = require("../../models/pengajar/pengajar");

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