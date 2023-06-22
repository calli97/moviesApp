"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundError_1 = __importDefault(require("../helpers/errors/NotFoundError"));
const error404 = (req, res, next) => {
    return next(new NotFoundError_1.default());
};
exports.default = error404;
