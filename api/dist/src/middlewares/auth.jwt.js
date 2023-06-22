"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../entity/User"));
const InvalidTokenError_1 = __importDefault(require("../helpers/errors/InvalidTokenError"));
const NoTokenProvidedError_1 = __importDefault(require("../helpers/errors/NoTokenProvidedError"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    try {
        if (token === undefined || token === null) {
            throw new NoTokenProvidedError_1.default();
        }
        const decoded = jsonwebtoken_1.default.verify(token, "secret");
        const user = yield User_1.default.findOneBy({
            email: decoded.email,
            userId: decoded.id,
        });
        if (user === null) {
            throw new InvalidTokenError_1.default();
        }
        next();
    }
    catch (error) {
        res.status(403).json({
            code: 403,
            error: error.message,
        });
    }
});
exports.verifyToken = verifyToken;
