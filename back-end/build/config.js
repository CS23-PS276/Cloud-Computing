"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = init();
function init() {
    return {
        nodeEnv: process.env.NODE_ENV,
        jwtKey: process.env.JWT_KEY,
        key: process.env.KEY,
        bycriptRound: toNumber(process.env.BYCRIPT_ROUND, 10),
        port: toNumber(process.env.PORT, 3000),
        sequelizeDbName: process.env.DB,
        sequelizeDbUser: process.env.DB_USER,
        sequelizeDbPass: process.env.DB_PASS,
        sequelizeHost: process.env.HOST,
        sequelizeDialect: process.env.DIALECT,
        sequelizeDbPort: toNumber(process.env.DB_PORT, 3306),
        xidLength: toNumber(process.env.XID_LENGTH, 10),
        jetLifeTime: toNumber(process.env.JWT_ACCESS_LIFETIME, 7200)
    };
}
function toNumber(value, defaultValue) {
    if (!value) {
        return defaultValue;
    }
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
        return 0;
    }
    return Number(parsedValue);
}
//# sourceMappingURL=config.js.map