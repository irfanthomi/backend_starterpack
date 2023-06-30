const config = require("./app/config.js");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const logger = require("./app/config/winston");
const app = express();
const utility = require("./app/controllers/util");
const config2 = require("./app/.secrets/config");
const secrets = require("./app/.secrets/secret");
const pack = require("./package.json");

// noinspection JSCheckFunctionSignatures
app.use(cors({}));

// parse requests of content-type: application/json
app.use(express.json({ limit: "20mb" }));
app.enable("trust proxy");
// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

// app.use(cors({origin:"http://localhost/"}))

// root route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to backend.",
        version: pack.version,
    });
});

// require("./app/routes/customer.routes.js")(app);



morgan.token("host",
    /**
     *
     * @param {e.Request} req
     * @returns {*}
     */
    function (req) {
        return req.hostname;
    });

app.use(morgan("dev", {
    stream: logger.stream
}));



let {
    r_pub,
    r_auth,

} = require("./app/routes/v1.routes");

app.use("/api/v1/", r_pub);
app.use("/api/v1/", r_auth);


app.use("*", utility._404);

// eslint-disable-next-line no-undef
// var port = process.env.PORT || 3000;
const port = config.PORT || 3000;
// eslint-disable-next-line no-undef
// var mode = process.env.NODE_ENV || "NA";
const mode = config.NODE_ENV || "development";

app.locals.secrets = secrets;
app.locals.config = config2;

app.listen(port, () => {
    logger.info(`Server is running on port ${port} in ${mode} mode.`);
});
