"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lansia_controller_1 = __importDefault(require("../controllers/lansia.controller"));
const AuthMiddelware_1 = __importDefault(require("../middelware/AuthMiddelware"));
const lansia_validator_1 = __importDefault(require("../validator/lansia.validator"));
const Baserouter_1 = __importDefault(require("./Baserouter"));
class LansiaRouter extends Baserouter_1.default {
    routes() {
        this.router.use("/", AuthMiddelware_1.default.auth);
        this.router.get("/", lansia_controller_1.default.findAllLansia);
        this.router.get("/:xid", lansia_controller_1.default.findByXid);
        this.router.post("/", lansia_validator_1.default.validateCreate, lansia_controller_1.default.createLansia);
        this.router.delete("/:xid", lansia_controller_1.default.deleteLansia);
    }
}
exports.default = new LansiaRouter().router;
//# sourceMappingURL=lansia.router.js.map