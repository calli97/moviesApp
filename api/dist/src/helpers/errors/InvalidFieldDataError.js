"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidFieldDataError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid Field Data";
    }
}
exports.default = InvalidFieldDataError;
