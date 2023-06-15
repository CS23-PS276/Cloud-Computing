"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIllnes = exports.illness = void 0;
var illness;
(function (illness) {
    illness["other"] = "other";
    illness["hipertensi"] = "hipertensi";
    illness["diabetes"] = "diabetes";
    illness["reumatik"] = "reumatik";
    illness["jantung"] = "penyakit jantung";
    illness["asma"] = "asma";
})(illness = exports.illness || (exports.illness = {}));
function getIllnes(str) {
    const result = {};
    for (const penyakit of str.split(",")) {
        switch (penyakit.toLowerCase()) {
            case illness.asma:
                result[illness.asma] = true;
                break;
            case illness.hipertensi:
                result[illness.hipertensi] = true;
                break;
            case illness.diabetes:
                result[illness.diabetes] = true;
                break;
            case illness.reumatik:
                result[illness.reumatik] = true;
                break;
            case illness.jantung:
                result[illness.jantung] = true;
                break;
            default:
                result["lainnya"] = true;
                break;
        }
    }
    return result;
}
exports.getIllnes = getIllnes;
//# sourceMappingURL=penyakit.constant.js.map