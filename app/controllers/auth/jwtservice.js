const fs = require("fs");
const jwt = require("jsonwebtoken");

// use 'utf8' to get string instead of byte array  (512 bit key)

// use generate_secrets.sh to generate the keys (sorry it was broken before)
var privateKEY = fs.readFileSync("app/.secrets/private.key"
    // , { encoding: "utf8", flag: "r" }
);
var publicKEY = fs.readFileSync("app/.secrets/public.key"
    // , { encoding: "utf8", flag: "r" }
);

module.exports = {
    sign: (payload, $Options) => {
        /*
         sOptions = {
          issuer: "Authorizaxtion/Resource/This server",
          subject: "iam@user.me", 
          audience: "Client_Identity" // this should be provided by client
         }
        */
        // Token signing options
        var signOptions = {
            issuer: $Options.issuer,
            subject: $Options.subject,
            audience: $Options.audience,
            expiresIn: "8d",    // 30 days validity
            algorithm: "RS256"
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },
    verify: (token, $Option) => {
        /*
         vOption = {
          issuer: "Authorization/Resource/This server",
          subject: "iam@user.me", 
          audience: "Client_Identity" // this should be provided by client
         }  
        */
        var verifyOptions = {
            issuer: $Option.issuer,
            subject: $Option.subject,
            audience: $Option.audience,
            expiresIn: "8d",
            algorithm: ["RS256"]
        };
        try {
            return jwt.verify(token, publicKEY, verifyOptions);
        } catch (err) {
            return false;
        }
    },
    decode: (token) => {
        return jwt.decode(token, { complete: true });
        //returns null if token is invalid
    }
};