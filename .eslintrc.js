module.exports = {
    "env": {
        "browser": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 10,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/no-children-prop": "off",
        "react/no-find-dom-node": "off"
    }
};
