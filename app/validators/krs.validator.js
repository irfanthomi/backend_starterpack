const { param } = require("express-validator");

module.exports.getTranskrip = [
    param("mahasiswaId")
        .notEmpty()
        .withMessage("ID Mahasiswa tidak boleh kosong."),
    param("mahasiswaId")
        .isNumeric()
        .withMessage("ID Mahasiswa hanya boleh berisikan angka saja")
];
