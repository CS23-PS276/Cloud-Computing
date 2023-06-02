"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const config_1 = require("../config");
class CryptoSecure {
}
_a = CryptoSecure;
CryptoSecure.algorithm = 'aes-256-cbc';
CryptoSecure.secretKey = config_1.config.key;
CryptoSecure.secureEncodeString = (str) => {
    const iv = (0, crypto_1.randomBytes)(16);
    const cipher = (0, crypto_1.createCipheriv)(CryptoSecure.algorithm, CryptoSecure.secretKey, iv);
    let encrypted = cipher.update(str, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return `${iv.toString('hex')}:${encrypted}`;
};
CryptoSecure.secureDecodeString = (str) => {
    const [ivHex, encrypted] = str.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = (0, crypto_1.createDecipheriv)(CryptoSecure.algorithm, CryptoSecure.secretKey, iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
CryptoSecure.secureRandomString = (length) => {
    const bytes = (0, crypto_1.randomBytes)(Math.ceil(length / 2));
    return bytes.toString('hex').slice(0, length);
};
CryptoSecure.secureCompareString = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
};
CryptoSecure.randomUUID = () => {
    return (0, crypto_1.randomUUID)();
};
CryptoSecure.createXid = () => {
    return `${_a.randomUUID()}-${_a.secureRandomString(config_1.config.xidLength)}`;
};
exports.default = CryptoSecure;
//# sourceMappingURL=CryptoSecure.js.map