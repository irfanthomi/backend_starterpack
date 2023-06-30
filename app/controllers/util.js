const logger = require("../config/winston");


/**
 * menandai handler masih dibangun
 * @param {import("express").Request} req Request
 * @param {import("express").Response} res Response
 */
function uc(req, res) {
    res.status(501).send({
        message: "under construction",
        path: req.path, 
        handler: req.route || "req.route",
        ips: req.ips,
        ip: req.ip
    });
}
/**
 * 404
 * @type {import("express").RequestHandler} req Request
 */
function _404(req, res, next) {
    if (res.headersSent){
        next();
        return;
    }
    if(req.accepts(["json"])){
        res.status(404).send({
            error: "url not found",
            url: req.url
        });
    }else{
        next();
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Error} err 
 * @param {string} message 
 */
function param_err(req, res, info) {
    res.status(400).send({ "message": "parameter invalid", info: info, params: req.param });
}

/**
 * 
 * @param {Request} req 
 * @param {Error} err 
 * @param {string} message 
 */
function query_err(req, res, info) {
    res.status(400).send({ "message": "query invalid", info: info, params: req.query });
}

/**
 * 
 * @param {Date} time_start 
 * @param {number} day 
 * @param {string} time 
 * @returns {Date}
 */

function setTimeUtil(time_start, day, time) {
    let calc_time = new Date(
        time_start.getFullYear(),
        time_start.getMonth(),
        time_start.getDate()
    );
    let [h, m, s] = time.split(":").map(parseInt);
    calc_time = new Date(calc_time.setHours(h));
    calc_time = new Date(calc_time.setMinutes(m));
    calc_time = new Date(calc_time.setSeconds(s));
    calc_time = new Date(calc_time.getTime() + (3600 * 24 * 1000 * day));
    return calc_time;
}

/**
 * 
 * @param {Date} date
 * @returns {string}
 */
function todatetimelocale(date) {
    return date.toDateString("id", { timeZone: "Asia/Jakarta" }) + " " + date.toTimeString("id", { timeZone: "Asia/Jakarta" });
}

function tahunid() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    if (month > 6) {
        return `${year}1`;
    } else {
        return `${year - 1}2`;
    }
}

function res_err(res, handler) {
    return (error) => {
        logger.error("error %O, %O", handler, error);
        res.send(500).send({ error });
    };
}

function webhook_generic(req, res) {
    logger.info(req.body);
    res.send(req.body);
}

function rupiah(number) {
    return Intl.NumberFormat("id", {style:"currency",currency:"IDR"}).format(number);
}


module.exports = {
    uc,
    param_err,
    query_err,
    setTimeUtil,
    todatetimelocale,
    tahunid,
    _404,
    res_err,
    webhook: {
        generic:webhook_generic
    },
    rupiah
};