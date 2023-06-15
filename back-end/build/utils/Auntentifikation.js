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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
class Auntentifikation {
}
_a = Auntentifikation;
Auntentifikation.compare = (text, encryptedText) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(text, encryptedText);
});
Auntentifikation.generatePassword = (text) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.hash(text, config_1.config.bycriptRound);
});
Auntentifikation.generateToken = (value) => {
    const token = jsonwebtoken_1.default.sign({
        value,
    }, config_1.config.jwtKey, {
        expiresIn: config_1.config.jetLifeTime,
    });
    return token;
};
Auntentifikation.checkToken = (token) => {
    return jsonwebtoken_1.default.verify(token, config_1.config.jwtKey);
};
exports.default = Auntentifikation;
//# sourceMappingURL=Auntentifikation.js.map