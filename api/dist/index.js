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
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
const dataSource_1 = require("./src/dataSource");
const roleControllers_1 = require("./src/controllers/roleControllers");
dotenv_1.default.config();
const { PORT } = process.env;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield dataSource_1.AppDataSource.initialize();
            console.log("Database Connected");
            app_1.default.listen(PORT);
            console.log(`Server running on port: ${PORT}`);
            yield (0, roleControllers_1.initializeRoles)();
        }
        catch (error) {
            console.error(error);
        }
    });
}
setTimeout(() => {
    main();
}, 60000);
