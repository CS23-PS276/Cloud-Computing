"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastest_validator_1 = __importDefault(require("fastest-validator"));
const created_helper_1 = require("../helpers/created.helper");
const kebutuhan_constant_1 = require("../constant/kebutuhan.constant");
const gender_constant_1 = require("../constant/gender.constant");
const mobilitas_constant_1 = require("../constant/mobilitas.constant");
class UserValidator {
    constructor() {
        this.validator = new fastest_validator_1.default();
        this.validateCreate = (req, res, next) => {
            const scema = {
                username: { type: "string", min: 5, max: 255, required: true },
                relation: { type: "string", min: 1, max: 255, require: true },
                gender: { type: "string", require: true },
                dateBirthday: { type: "string", require: true },
                weigth: { type: "number", min: 0, require: true },
                height: { type: "number", min: 0, require: true },
                mobilitas: { type: "array", items: "string", require: true },
                illness: { type: "array", items: "string", require: true },
                kebutuhan: { type: "array", items: "string", require: true },
                language: { type: "array", items: "string", require: true },
                detailIllness: { type: "string", require: false },
                alamat: { type: "string", min: 5, max: 255, required: true },
                noTelp: { type: "string", min: 11, max: 20, required: true },
                $$strict: true,
            };
            const result = this.validator.validate(req.body, scema);
            if (result !== true) {
                return res.send((0, created_helper_1.GetResponse)(result, 400, created_helper_1.message.FAILED));
            }
            const payload = req.body;
            // check gender
            if (!(0, gender_constant_1.checkGender)(payload.gender)) {
                return res.send((0, created_helper_1.GetResponse)({
                    type: "wrong type",
                    message: "The 'gender' field is wrongType.",
                    field: "gender",
                }, 400, created_helper_1.message.FAILED));
            }
            // check date
            if (!isDateString(payload.dateBirthday.toString())) {
                return res.send((0, created_helper_1.GetResponse)({
                    type: "wrong type",
                    message: "The 'dateBirthday' field is wrongType.",
                    field: "dateBirthday",
                }, 400, created_helper_1.message.FAILED));
            }
            // check kebutuhan
            if (!(0, kebutuhan_constant_1.checkValidLengthKebutuhan)(payload.kebutuhan.length)) {
                return res.send((0, created_helper_1.GetResponse)({
                    type: "invalid length",
                    message: "The 'kebutuhan' field is invalid length.",
                    field: "kebutuhan",
                }, 400, created_helper_1.message.FAILED));
            }
            for (const kebutuhan of payload.kebutuhan) {
                const [str, number] = kebutuhan.split("-");
                if (!booleanify(number)) {
                    return res.send((0, created_helper_1.GetResponse)({
                        type: "invalid structur",
                        message: "The 'kebutuhan' field is invalid structur.",
                        field: "kebutuhan",
                    }, 400, created_helper_1.message.FAILED));
                }
                if (!(0, kebutuhan_constant_1.checkValidkebutuhan)(str)) {
                    return res.send((0, created_helper_1.GetResponse)({
                        type: "invalid structur",
                        message: "The 'kebutuhan' field is invalid structur.",
                        field: "kebutuhan",
                    }, 400, created_helper_1.message.FAILED));
                }
            }
            for (const mobilitas of payload.mobilitas) {
                if (!(0, mobilitas_constant_1.checkValidmobilitas)(mobilitas)) {
                    return res.send((0, created_helper_1.GetResponse)({
                        type: "invalid value",
                        message: "The 'mobilitas' field is invalid value.",
                        field: "mobilitas",
                    }, 400, created_helper_1.message.FAILED));
                }
            }
            next();
            return;
        };
    }
}
function booleanify(value) {
    const truthy = ["true", "True", "false", "False"];
    return truthy.includes(value);
}
function isDateString(value) {
    const timestamp = Date.parse(value);
    return !isNaN(timestamp);
}
exports.default = new UserValidator();
//# sourceMappingURL=lansia.validator.js.map