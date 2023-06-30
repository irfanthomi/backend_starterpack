const {body, query, param, checkSchema} = require("express-validator");

module.exports.jadwal_validator = [
    body("RuangID")
        .notEmpty().withMessage("RuangID tidak boleh kosong."),
    body("kelas_uid")
        .notEmpty().withMessage("kelas_uid tidak boleh kosong.")
        .isUUID().withMessage("kelas_uid harus uuid."),
    body("JamMulai")
        .notEmpty().withMessage("JamMulai tidak boleh kosong.")
        .isISO8601().withMessage("JamMulai harus pakai format iso contoh: 2021-12-20T12:47:38.788Z"),
    body("JamSelesai")
        .notEmpty().withMessage("JamSelesai tidak boleh kosong.")
        .isISO8601().withMessage("JamMulai harus pakai format iso contoh: 2021-12-20T12:47:38.788Z"),
];

module.exports.getJadwalValidator = [
    query("RuangID")
        .notEmpty().withMessage("RuangID tidak boleh kosong.")
];

module.exports.repeatJadwalValidator = [
    body("bookingId")
        .notEmpty().withMessage("bookingId tidak boleh kosong"),
    body("totalRepeat")
        .notEmpty().withMessage("totalRepeat tidak boleh kosong."),
    body("totalRepeat")
        .isNumeric().withMessage("totalRepeat hanya boleh berisi angka saja.")
];

module.exports.deleteJadwalValidator = [
    param("id")
        .notEmpty().withMessage("RuangID tidak boleh kosong.")
        .isNumeric().toInt().withMessage("RuangID tidak boleh kosong.")
];

module.exports.putJadwalValidator = [
    param("id")
        .notEmpty().withMessage("RuangID tidak boleh kosong.")
        .isNumeric().toInt().withMessage("RuangID tidak boleh kosong."),
    body("RuangID")
        .notEmpty().withMessage("RuangID tidak boleh kosong."),
    body("kelas_uid")
        .notEmpty().withMessage("kelas_uid tidak boleh kosong.")
        .isUUID().withMessage("kelas_uid harus uuid."),
    body("JamMulai")
        .notEmpty().withMessage("JamMulai tidak boleh kosong.")
        .isISO8601().withMessage("JamMulai harus pakai format iso contoh: 2021-12-20T12:47:38.788Z"),
    body("JamSelesai")
        .notEmpty().withMessage("JamSelesai tidak boleh kosong.")
        .isISO8601().withMessage("JamMulai harus pakai format iso contoh: 2021-12-20T12:47:38.788Z"),
];

module.exports.updateKediMkSemesterValidator = [
    body('data')
    .notEmpty()
    .withMessage('data tidak boleh kosong.'),
    checkSchema({
        'data.tahunid': {
            in: ['body'],
            errorMessage: 'tahunid tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'data.kelas': {
            in: ['body'],
            errorMessage: 'kelas tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'data.mkkode': {
            in: ['body'],
            errorMessage: 'mkkode tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'data.dosenid': {
            in: ['body'],
            errorMessage: 'dosenid tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
    })
];