"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, status) {
        super();
        this.name = this.constructor.name;
        this.status = status !== null && status !== void 0 ? status : 500;
        this.message = message !== null && message !== void 0 ? message : "Unexpected Error";
    }
}
exports.default = AppError;
