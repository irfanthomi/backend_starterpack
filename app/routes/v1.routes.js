const e = require("express");
const r_auth = e.Router();
const r_pub = e.Router();
const r_auth_public = e.Router();

const auth = require("../controllers/auth/auth");
const authentication = require("../controllers/auth/authentication");

const cama = require("../controllers/cama/cama");
const multer = require("multer");
const pengajar = require("../controllers/pengajar/pengajar");
const upload = multer({
    limits: {
        fileSize: 10 * 1000 * 1000
    },
    dest: "uploads/"
});
r_auth.use(auth);

// Routes ---------------------------------------------------------
r_pub
    .route("/user/login/")
    .post(authentication.login);

r_auth
    .route("/user/")
    .get(cama.camaController);

r_auth
    .route("/pengajar/")
    .get(pengajar.pengajarController);

module.exports = {
    r_auth,
    r_pub,
    r_auth_public
};
