module.exports = {
    "plugins": [
        "babel",
        "jest",
    ],
    "env": {
        "node": true,
        "jest": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
    },
    "extends": [
        "airbnb-base",
        "plugin:jest/recommended",
    ],
    "rules": {
        "no-console": 0,
    },
};