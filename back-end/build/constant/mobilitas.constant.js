"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMobilitas = exports.checkValidmobilitas = exports.mobilitas_enum = void 0;
var mobilitas_enum;
(function (mobilitas_enum) {
    mobilitas_enum["BR"] = "bed rest";
    mobilitas_enum["BBBK"] = "butuh bantuan, banyak di kasur";
    mobilitas_enum["BBSK"] = "butuh bantuan, sedikit di kasur";
    mobilitas_enum["AR"] = "aktivitas ringan";
    mobilitas_enum["AB"] = "aktif bergerak";
})(mobilitas_enum = exports.mobilitas_enum || (exports.mobilitas_enum = {}));
function checkValidmobilitas(str) {
    const mobilitasValues = Object.values(mobilitas_enum);
    const resultKeys = mobilitasValues.includes(str.split("-")[0]);
    if (!resultKeys) {
        return false;
    }
    const num = str.split("-")[1];
    console.log(num);
    if (!isNumber(num)) {
        return false;
    }
    const numParse = Number(num);
    if (numParse > 5 || numParse < 0) {
        return false;
    }
    return true;
}
exports.checkValidmobilitas = checkValidmobilitas;
function isNumber(value) {
    return !isNaN(Number(value));
}
function getMobilitas(str) {
    const result = {};
    for (const mobilitas of str.split(",")) {
        result[mobilitas.split("-")[0].trim()] = Number(mobilitas.split("-")[1]);
    }
    return result;
}
exports.getMobilitas = getMobilitas;
//# sourceMappingURL=mobilitas.constant.js.map