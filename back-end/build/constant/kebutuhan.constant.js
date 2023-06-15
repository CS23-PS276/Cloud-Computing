"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebutuhanResult = exports.checkValidLengthKebutuhan = exports.checkValidkebutuhan = exports.kebutuhan_enum = void 0;
var kebutuhan_enum;
(function (kebutuhan_enum) {
    kebutuhan_enum["MR"] = "mengurus rumah";
    kebutuhan_enum["MPRAF"] = "membantu pergerakan dan aktivitas fisik";
    kebutuhan_enum["MKODM"] = "membantu konsumsi obat dan makanan";
    kebutuhan_enum["MKRSM"] = "mengecek kesehatan rutin secara mandiri";
    kebutuhan_enum["MDM"] = "mendampingi dan menjaga";
    kebutuhan_enum["MAMK"] = "memasangkan alat medis khusus";
    kebutuhan_enum["MRKD"] = "memeriksakan rutin ke dokter";
})(kebutuhan_enum = exports.kebutuhan_enum || (exports.kebutuhan_enum = {}));
function checkValidkebutuhan(str) {
    const kebutuhanValues = Object.values(kebutuhan_enum);
    return kebutuhanValues.includes(str);
}
exports.checkValidkebutuhan = checkValidkebutuhan;
function checkValidLengthKebutuhan(int) {
    return int === Object.values(kebutuhan_enum).length;
}
exports.checkValidLengthKebutuhan = checkValidLengthKebutuhan;
function kebutuhanResult(arr) {
    const result = {};
    for (const resultArr of arr) {
        const str = resultArr.split("-");
        result[str[0].trim()] = str[1] === "true";
    }
    return result;
}
exports.kebutuhanResult = kebutuhanResult;
//# sourceMappingURL=kebutuhan.constant.js.map