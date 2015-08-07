System.config({
    "baseURL": "/dist",
    "transpiler": "babel",
    "babelOptions": {
        "optional": [
            "es7.decorators",
            "es7.classProperties",
            "runtime"
        ]
    },
    "paths": {
        "*": "*",
    },
    "defaultJSExtensions": true
});