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
exports.signIn = exports.signUp = void 0;
const User_1 = __importDefault(require("../entity/User"));
const crypt_1 = require("../helpers/crypt");
const EmailAlrealyRegisterError_1 = __importDefault(require("../helpers/errors/EmailAlrealyRegisterError"));
const NotRegisteredUserError_1 = __importDefault(require("../helpers/errors/NotRegisteredUserError"));
const InvalidPasswordError_1 = __importDefault(require("../helpers/errors/InvalidPasswordError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Role_1 = __importDefault(require("../entity/Role"));
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, password, email } = req.body;
        const verification = yield User_1.default.findOneBy({
            email: email,
        });
        if (verification !== null) {
            throw new EmailAlrealyRegisterError_1.default();
        }
        let newUser = new User_1.default();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = yield (0, crypt_1.encryptPassword)(password);
        newUser.email = email;
        yield newUser.save();
        const userRole = yield Role_1.default.findOneBy({
            name: "user",
        });
        if (userRole !== null) {
            newUser.role = userRole;
            yield newUser.save();
        }
        const token = jsonwebtoken_1.default.sign({
            id: newUser.userId,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            role: newUser.role,
        }, "secret", {
            expiresIn: 86400, //24Hours
        });
        res.json({ token });
    }
    catch (error) {
        next(error);
    }
});
exports.signUp = signUp;
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_1.default.findOne({
            where: {
                email: email,
            },
            relations: {
                role: true,
            },
        });
        if (user === null) {
            throw new NotRegisteredUserError_1.default();
        }
        if ((yield (0, crypt_1.verifyPassword)(user.password, password)) === false) {
            throw new InvalidPasswordError_1.default();
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
        }, "secret", {
            expiresIn: 86400, //24Hours
        });
        res.json({ token });
    }
    catch (error) {
        next(error);
    }
});
exports.signIn = signIn;
