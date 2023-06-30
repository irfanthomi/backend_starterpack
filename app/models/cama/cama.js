const { db_pengajar } = require("../../config/database/db_async");


async function camaModels() {
    let data = await db_pengajar("SELECT * FROM aplikan where AplikanID=?", "YB00100001")
    let result = {
        nama: "asdsd",
        data: data
    }
    return result
}

module.exports = {
    camaModels
};