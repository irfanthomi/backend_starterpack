const e = require("express");

function tahunIdFromSemester(_tahun, _semester) {
    let tahunId = _tahun;

    if (!tahunId) {
        return _tahun;
    }
  
    // tahun id format is incorrect
    if (tahunId.length !== 5) {
        return tahunId;
    }

    let semester = _semester;
    while (semester > 1) {
        let counter = parseInt(tahunId.substr(4, 1));
        let _tahunId = parseInt(tahunId.substr(0, 4));

        if (counter < 2) {
            counter++;
        } else {
            counter = 1;
            _tahunId++;
        }
        tahunId = `${_tahunId}${counter}`;
        semester--;
    }

    return tahunId;
}

function getSemesterFromTahun(_tahunMulai, tahunSekarang) {
    let tahunMulai = _tahunMulai;
    let odd = [];
    let even = [];
    let semester = 0;
    let odd_start = 1;
    let even_start = 2;

    while (odd_start < 20) {
        odd.push(odd_start);
        odd_start += 2;
    }

    while (even_start < 20) {
        even.push(even_start);
        even_start += 2;
    }

    if (tahunMulai.substr(4, 1) % 2 === 0) {
        semester = 2;
    } else {
        semester = 1;
    }

    while (parseInt(tahunMulai) <= parseInt(tahunSekarang)) {
        let counter = parseInt(tahunMulai.substr(4, 1));
        let _tahunId = parseInt(tahunMulai.substr(0, 4));

        if (counter % 2 === 0) {
            semester = even[0];
            even.shift();
        } else {
            semester = odd[0];
            odd.shift();
        }

        if (counter < 2) {
            counter++;
        } else {
            counter = 1;
            _tahunId++;
        }

        tahunMulai = `${_tahunId}${counter}`;
    }
    return semester;
}

function queryResult(data) {
    if (!data || !data.length) {
        return undefined;
    }

    if (data.length == 2 && data[0].length > 0) {
        if (data[0].length > 1) {
            return data[0];
        } else {
            return data[0];
        }
    } else {
        return undefined;
    }
}

function dayLabel(num) {
    switch (num) {
    case 1:
        return "Senin";
    case 2:
        return "Selasa";
    case 3:
        return "Rabu";
    case 4:
        return "Kamis";
    case 5:
        return "Jumat";
    case 6:
        return "Sabtu";
    default:
        return "";
    }
}

module.exports = {
    tahunIdFromSemester,
    queryResult,
    getSemesterFromTahun,
    dayLabel
};