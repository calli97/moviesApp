"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    const statusCode = err.status;
    const message = err.message;
    return res.status(statusCode).json({
        code: statusCode,
        error: message,
    });
};
exports.default = errorHandler;
