"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const created_helper_1 = require("../helpers/created.helper");
const CryptoSecure_1 = __importDefault(require("../utils/CryptoSecure"));
const Auntentifikation_1 = __importDefault(require("../utils/Auntentifikation"));
class AuthMiddelware {
}
AuthMiddelware.auth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization)
        return res.send((0, created_helper_1.GetResponse)({
            data: "access denied"
        }, 401, created_helper_1.message.FAILED));
    const [tipe, token] = authorization.split(" ");
    if (CryptoSecure_1.default.secureCompareString(token, "Bearer") || !token)
        return res.send((0, created_helper_1.GetResponse)({
            data: "access denied"
        }, 401, created_helper_1.message.FAILED));
    try {
        const verifikasi = Auntentifikation_1.default.checkToken(token);
        delete req.headers.token;
        req.app.locals.user = verifikasi.value;
        next();
    }
    catch (error) {
        return res.send((0, created_helper_1.GetResponse)({
            data: "access denied"
        }, 401, created_helper_1.message.FAILED));
    }
};
exports.default = AuthMiddelware;
//# sourceMappingURL=AuthMiddelware.js.map