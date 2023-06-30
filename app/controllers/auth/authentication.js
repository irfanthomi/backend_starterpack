const jwt_service = require("./jwtservice");
const authconfig = require("../../.secrets/auth.config");
const logger = require("../../config/winston");
const { DateTime } = require("luxon");

const { authUser } = require("../../models/auth/authentication");

/**
 * 
 * @param {import("../../types").AuthReq} req 
 * @param {import("express").Response} res 
 */
// exports.refresh_token = (req, res) => {
//     logger.info(`refresh token for ${req.user.id} with role ${req.user.role} from org ${req.user.org}`);
//     let token = "";
//     try {
//         let expired = DateTime.local().plus({ day: 8 });
//         token = jwt_service.sign({
//             user: req.user
//         }, authconfig);
//         res.send({ error: false, token, expired });
//     } catch (error) {
//         logger.error(error.message);
//         if (!res.headersSent) {
//             res.status(500).send({ error: true, message: error });
//         }
//     }
// };

exports.login = (req, res) => {

    if (!req.body.userid || !req.body.password) {
        res.status(400).send({
            message: "body invalid!",
            body: req.body
        });
        return;
    }
    var u = authUser(req.body.userid, req.body.password);
    u.then(value => {
        console.log(value);
        var payload = {
            user: value
        };
        var token = jwt_service.sign(payload, authconfig);
        res.send({
            error: false,
            user: value,
            token
        });
    }).catch(reason => {
        res.status(401).send({
            error: true,
            message: "credential rejected"
        });
    });
};