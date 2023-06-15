"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguages = exports.language = void 0;
var language;
(function (language) {
    language["indonesia"] = "indonesia";
    language["ingris"] = "ingris";
    language["jawa"] = "jawa";
    language["sunda"] = "sunda";
    language["melayu"] = "melayu";
    language["other"] = "other";
})(language = exports.language || (exports.language = {}));
function getLanguages(str) {
    const result = {};
    for (const lang of str.split(",")) {
        switch (lang.toLowerCase()) {
            case language.indonesia:
                result[language.indonesia] = true;
                break;
            case language.ingris:
                result[language.ingris] = true;
                break;
            case language.jawa:
                result[language.jawa] = true;
                break;
            case language.sunda:
                result[language.sunda] = true;
                break;
            case language.melayu:
                result[language.melayu] = true;
                break;
            default:
                result[language.other] = true;
                break;
        }
    }
    return result;
}
exports.getLanguages = getLanguages;
//# sourceMappingURL=language.constant.js.map