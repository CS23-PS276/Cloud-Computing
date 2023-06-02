"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastest_validator_1 = __importDefault(require("fastest-validator"));
const created_helper_1 = require("../helpers/created.helper");
class UserValidator {
    constructor() {
        this.validator = new fastest_validator_1.default();
        this.validateUpdate = (req, res, next) => {
            const scema = {
                username: { type: 'string', min: 5, max: 255, required: true },
                version: { type: 'number', min: 1, require: true },
                $$strict: true
            };
            const result = this.validator.validate(req.body, scema);
            if (result === true) {
                next();
                return;
            }
            return res.send((0, created_helper_1.GetResponse)(result, 400, created_helper_1.message.FAILED));
        };
    }
}
exports.default = new UserValidator();
//# sourceMappingURL=user.validator.js.map