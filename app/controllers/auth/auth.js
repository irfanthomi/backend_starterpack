const jwt_service = require("./jwtservice.js");
const authConfig = require("../../.secrets/auth.config.js");
const logger = require("../../config/winston.js");

const { db_pengajar } = require("../../config/database/db_async.js");


module.exports = async (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }
    let splittoken = token.split(" ");
    try {
        const decode = jwt_service.verify(splittoken[1], authConfig);

        if (decode == false) {
            logger.warn("got invalid token");
            res.status(401).send("Invalid token. failed toc decode");
        }
        let user = await [
            await db_pengajar("SELECT * FROM pengajar where email =? ", [decode.user[0].email]),
            await db_pengajar("SELECT * FROM peserta where email =? ", [decode.user[0].email])
        ]

        for (let i = 0; i < user.length; i++) {
            if (user[i].length > 0) {
                next();
            }
        }
    } catch (ex) {
        logger.warn("can't validate invalid token, %O", ex);
        res.status(400).send("Invalid token");
    }
};


