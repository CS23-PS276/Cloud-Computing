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
                tanggalLahir: { type: 'string', require: true },
                alamat: { type: 'string', min: 5, max: 255, require: true },
                jenisKelamin: { type: 'boolean', require: true },
                version: { type: 'number', min: 1, require: true },
                $$strict: true
            };
            const result = this.validator.validate(req.body, scema);
            if (result === true) {
                if (!isDateString(req.body.tanggalLahir.toString())) {
                    return res.send((0, created_helper_1.GetResponse)({
                        "type": "wrong type",
                        "message": "The 'tanggalLahir' field is wrongType.",
                        "field": "tanggalLahir"
                    }, 400, created_helper_1.message.FAILED));
                }
                next();
                return;
            }
            return res.send((0, created_helper_1.GetResponse)(result, 400, created_helper_1.message.FAILED));
        };
    }
}
function isDateString(value) {
    const timestamp = Date.parse(value);
    return !isNaN(timestamp);
}
exports.default = new UserValidator();
//# sourceMappingURL=user.validator.js.map