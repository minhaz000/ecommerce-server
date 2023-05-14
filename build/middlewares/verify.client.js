"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyClient = void 0;
const verifyClient = (req, res, next) => {
    if (req.headers.origin) {
        console.log(req.headers.origin);
    }
    next();
};
exports.verifyClient = verifyClient;
