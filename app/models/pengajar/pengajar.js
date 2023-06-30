const { db_pengajar } = require("../../config/database/db_async");

async function pengajarModels() {
    let data = await db_pengajar("SELECT * FROM pengajar", [])

    return data
}

module.exports = {
    pengajarModels
};