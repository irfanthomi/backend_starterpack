const { camaModels } = require("../../models/cama/cama");


exports.camaController = (req, res) => {
    let b = camaModels();
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

