"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("./AppError"));
class InvalidPasswordError extends AppError_1.default {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.status = 403;
        this.message = "Invalid password";
    }
}
exports.default = InvalidPasswordError;
