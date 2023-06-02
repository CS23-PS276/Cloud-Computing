"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const AuthMiddelware_1 = __importDefault(require("../middelware/AuthMiddelware"));
const user_validator_1 = __importDefault(require("../validator/user.validator"));
const Baserouter_1 = __importDefault(require("./Baserouter"));
class UserRouter extends Baserouter_1.default {
    routes() {
        this.router.use("/", AuthMiddelware_1.default.auth);
        this.router.get("/", users_controller_1.default.findAllUser);
        this.router.get("/:xid", users_controller_1.default.findByXid);
        this.router.put("/:xid", user_validator_1.default.validateUpdate, users_controller_1.default.updateUser);
        this.router.delete("/:xid", users_controller_1.default.deleteUser);
    }
}
exports.default = new UserRouter().router;
//# sourceMappingURL=user.router.js.map