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
exports.initializeRoles = void 0;
const Role_1 = __importDefault(require("../entity/Role"));
const roles = ["user", "admin"];
const initializeRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < roles.length; i++) {
        yield Role_1.default.upsert({ name: roles[i], roleId: i + 1 }, {
            skipUpdateIfNoValuesChanged: true,
            conflictPaths: ["name"],
        });
    }
    console.log("Roles initialize");
});
exports.initializeRoles = initializeRoles;
