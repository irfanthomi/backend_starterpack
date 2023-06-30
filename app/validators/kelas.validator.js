const { param, query } = require("express-validator");

module.exports.downloadAbsensi = [
    param("kelas_uid")
        .notEmpty()
        .withMessage("kelas tidak boleh kosong."),
    query("type")
        .notEmpty()
        .withMessage("type tidak boleh kosong."),
];
