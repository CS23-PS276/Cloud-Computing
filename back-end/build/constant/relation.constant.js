"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelation = exports.relation = void 0;
var relation;
(function (relation) {
    relation["DS"] = "diri sendiri";
    relation["K"] = "kakek";
    relation["N"] = "nenek";
    relation["A"] = "ayah";
    relation["I"] = "ibu";
    relation["other"] = "other";
})(relation = exports.relation || (exports.relation = {}));
function getRelation(str) {
    const input = str.trim().toUpperCase();
    switch (input) {
        case relation.DS:
            return relation.DS;
        case relation.K:
            return relation.K;
        case relation.N:
            return relation.N;
        case relation.A:
            return relation.A;
        case relation.I:
            return relation.I;
        default:
            return relation.other;
    }
}
exports.getRelation = getRelation;
//# sourceMappingURL=relation.constant.js.map