const { db_pengajar } = require("../../config/database/db_async");

async function pengajarModels() {
    let data = await db_pengajar("SELECT * FROM pengajar", [])

    return data
}
async function pengajarAddModels(data) {
    console.log(data);
    let result = await db_pengajar("INSERT INTO pengajar nama=?,email=?,password=?,role=?,kelamin=?", [data.nama, data.email, data.password, data.role, data.kelamin])

    return result
}

module.exports = {
    pengajarModels,
    pengajarAddModels
};