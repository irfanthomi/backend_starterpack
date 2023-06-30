const { db_pengajar } = require("../../config/database/db_async");

function authUser(username, password) {
    return new Promise((resolve, reject) => {
        var methods = [
            db_pengajar("SELECT * FROM pengajar where email =? and password =?", [username, password]),
            db_pengajar("SELECT * FROM peserta where email =? and password =?", [username, password]),
        ];
        Promise.all(methods)
            .then(value => {
                for (let i = 0; i < value.length; i++) {
                    if (value[i].length > 0) {
                        resolve(value[i]);
                        return;
                    }
                }
                reject("invalid login credential");
            })
            .catch(reason => {
                console.log(reason);
                reject("gagal login credential");
            });
    }
    )
}

module.exports = {
    authUser
};