"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidFieldsAmountError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid amount of fields";
    }
}
exports.default = InvalidFieldsAmountError;
