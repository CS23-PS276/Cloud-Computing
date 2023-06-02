"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_validator_1 = __importDefault(require("../validator/auth.validator"));
const Baserouter_1 = __importDefault(require("./Baserouter"));
class AuthRoutes extends Baserouter_1.default {
    routes() {
        this.router.post("/register", auth_validator_1.default.validateRegister, auth_controller_1.default.register);
        this.router.post("/login", auth_validator_1.default.validateLogin, auth_controller_1.default.login);
    }
}
exports.default = new AuthRoutes().router;
//# sourceMappingURL=auth.router.js.map