const {UnauthorizedException} = require("../exceptions/unauthorized.exception");

module.exports.checkRole = (roles)=>(req, res, next) => {
    if (!roles.includes(res.locals.user.role)){
        next(new UnauthorizedException(`only ${roles.join(", ")} allowed to access`, {user: res.locals.user}));
    }else{
        next();
    }
};
