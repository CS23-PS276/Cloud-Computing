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
const created_helper_1 = require("../helpers/created.helper");
const auth_services_1 = __importDefault(require("../services/auth.services"));
class AuthController {
    constructor() {
        this.service = auth_services_1.default;
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const payload = req.body;
            try {
                const result = yield this.service.login(payload);
                response = (0, created_helper_1.GetResponse)(result, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                console.log(error);
                switch (error.message) {
                    case "valid": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "email atau password salah",
                        }, 400, created_helper_1.message.FAILED);
                        break;
                    }
                    default: {
                        response = (0, created_helper_1.GetResponse)(error, 500, created_helper_1.message.FAILED);
                    }
                }
            }
            return res.send(response);
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const payload = req.body;
            try {
                const result = yield this.service.register(payload);
                response = (0, created_helper_1.GetResponse)(result, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                switch (error.message) {
                    case "users": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "email sudah di pakai",
                        }, 401, created_helper_1.message.FAILED);
                        break;
                    }
                    case "pass": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "password tidak sama",
                        }, 400, created_helper_1.message.FAILED);
                        break;
                    }
                    case "email": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "email tidak valid",
                        }, 400, created_helper_1.message.FAILED);
                        break;
                    }
                    default: {
                        response = (0, created_helper_1.GetResponse)(error, 500, created_helper_1.message.FAILED);
                    }
                }
            }
            return res.send(response);
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.controller.js.map