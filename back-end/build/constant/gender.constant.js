"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGender = exports.mapGender = exports.checkGender = exports.gender = void 0;
const CryptoSecure_1 = __importDefault(require("../utils/CryptoSecure"));
var gender;
(function (gender) {
    gender["pria"] = "pria";
    gender["wanita"] = "wanita";
})(gender = exports.gender || (exports.gender = {}));
function checkGender(str) {
    if (CryptoSecure_1.default.secureCompareString(str, gender.pria) || CryptoSecure_1.default.secureCompareString(str, gender.wanita)) {
        return true;
    }
    return false;
}
exports.checkGender = checkGender;
function mapGender(str) {
    if (CryptoSecure_1.default.secureCompareString(str, gender.pria)) {
        return true;
    }
    return false;
}
exports.mapGender = mapGender;
function toGender(bool) {
    if (bool) {
        return gender.pria;
    }
    return gender.wanita;
}
exports.toGender = toGender;
//# sourceMappingURL=gender.constant.js.map