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
const config_1 = require("../config");
const created_helper_1 = require("../helpers/created.helper");
const users_repository_1 = __importDefault(require("../repository/users.repository"));
const Auntentifikation_1 = __importDefault(require("../utils/Auntentifikation"));
const CryptoSecure_1 = __importDefault(require("../utils/CryptoSecure"));
const user_service_1 = __importDefault(require("./user.service"));
class Auth {
    constructor() {
        this.userService = user_service_1.default;
        this.userRepository = users_repository_1.default;
        this.register = (payload) => __awaiter(this, void 0, void 0, function* () {
            const { email, username, password, retypePassword } = payload;
            if (!CryptoSecure_1.default.secureCompareString(password, retypePassword)) {
                throw Error("pass");
            }
            const users = yield this.userRepository.findByEmail(email);
            if (users) {
                throw Error("users");
            }
            if (!this.isEmail(email)) {
                throw Error("email");
            }
            const newPass = yield Auntentifikation_1.default.generatePassword(password);
            const createdvalue = (0, created_helper_1.createData)({
                xid: CryptoSecure_1.default.createXid(),
                username: username,
                password: newPass,
                email: email,
            });
            const result = yield this.userRepository.create(createdvalue);
            return this.userService.composeUser(result);
        });
        this.login = (payload) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = payload;
            const users = yield this.userRepository.findByEmail(email);
            if (!users || !(yield Auntentifikation_1.default.compare(password, users.password))) {
                throw Error("valid");
            }
            const result = this.userService.composeUser(users);
            const token = Auntentifikation_1.default.generateToken(result);
            result.token = {
                access_token: token,
                access_time: config_1.config.jetLifeTime,
            };
            return result;
        });
        this.isEmail = (email) => {
            if (!email)
                return false;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
    }
}
exports.default = new Auth();
//# sourceMappingURL=auth.services.js.map