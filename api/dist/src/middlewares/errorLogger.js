"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorLogger = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
};
exports.default = errorLogger;
