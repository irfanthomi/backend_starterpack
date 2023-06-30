const appRoot = require("app-root-path");
const winston = require("winston");
const {combine, timestamp, printf, colorize, prettyPrint, splat, json} = winston.format;

const myFormat = printf(in_msg => {
    let {level, message, source, timestamp: ts} = in_msg;

    if (source == "morgan") {
        return `${ts} ${message.trimEnd()} ;;`;
    } else {
        return `${ts} WNS ${level}: ${message} ;;`;
    }
});

let options = {
    file: {
        level: "info",
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 20,
        timestamp: true,
        format: combine(
            prettyPrint({depth: 2, colorize: true}),
            splat(),
            timestamp(),
            json()
        )
    },
    console: {
        level: "info",
        format: combine(
            prettyPrint({depth: 2, colorize: true}),
            splat(),
            colorize(),
            timestamp({format: "YYYY-MM-DDTHH:mm:ssZZ"}),
            myFormat
        ),
        handleExceptions: true,
        json: false,
        colorize: true
    }
};

// instantiate a new Winston Logger with the settings defined above
/** @type {winston.Logger} */
let logger = new winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function (message) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.log({level: "info", source: "morgan", message: message});
    }
};

module.exports = logger;