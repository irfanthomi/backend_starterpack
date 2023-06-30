module.exports = {
    "root":true,
    "parser":"@typescript-eslint/parser",
    "plugins":[
        "@typescript-eslint"
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "requireConfigFile":false
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
