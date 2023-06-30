const {body, checkSchema} = require("express-validator");

module.exports.pengisian_nilai_tugas_validator = [
    body('type')
        .notEmpty()
        .withMessage('type tidak boleh kosong.'),
    body('info')
        .notEmpty()
        .withMessage('info tidak boleh kosong.'),
    body('nilai')
        .notEmpty()
        .withMessage('nilai tidak boleh kosong.'),
    checkSchema({
        'info.bp': {
            in: ['body'],
            errorMessage: 'bp tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'info.mkkode': {
            in: ['body'],
            errorMessage: 'mkkode tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.tugas1': {
            in: ['body'],
            errorMessage: 'tugas1 tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.tugas2': {
            in: ['body'],
            errorMessage: 'tugas2 tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
    })
];

module.exports.pengisian_nilai_akhir_validator = [
    body('type')
        .notEmpty()
        .withMessage('type tidak boleh kosong.'),
    body('info')
        .notEmpty()
        .withMessage('info tidak boleh kosong.'),
    body('nilai')
        .notEmpty()
        .withMessage('nilai tidak boleh kosong.'),
    checkSchema({
        'info.bp': {
            in: ['body'],
            errorMessage: 'bp tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'info.mkkode': {
            in: ['body'],
            errorMessage: 'mkkode tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.tugas1': {
            in: ['body'],
            errorMessage: 'tugas1 tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.tugas2': {
            in: ['body'],
            errorMessage: 'tugas2 tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.uts': {
            in: ['body'],
            errorMessage: 'uts tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.uas': {
            in: ['body'],
            errorMessage: 'uas tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.nilai_akhir': {
            in: ['body'],
            errorMessage: 'nilai_akhir tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
        'nilai.grade': {
            in: ['body'],
            errorMessage: 'grade tidak boleh kosong',
            isEmpty: {
                negated: true
            }
        },
    })
];