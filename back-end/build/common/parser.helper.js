"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListOptions = void 0;
function Parser(input, def) {
    try {
        if (!input && typeof def.defaultValue === 'number') {
            return def.defaultValue;
        }
        if (typeof input === 'number') {
            return input;
        }
        const outputInteger = parseInt(input);
        return outputInteger ? outputInteger : 0;
    }
    catch (error) {
        return 0;
    }
}
function getListOptions(payload) {
    return {
        limit: Parser(payload.limit, { defaultValue: 10 }),
        skip: Parser(payload.skip, { defaultValue: 0 }),
        sortBy: payload.sortBy || '',
        filters: payload.filters || {},
        showAll: Boolean(payload.showAll) ? payload.showAll : false,
    };
}
exports.getListOptions = getListOptions;
//# sourceMappingURL=parser.helper.js.map