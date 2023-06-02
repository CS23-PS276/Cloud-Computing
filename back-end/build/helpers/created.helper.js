"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResponse = exports.updateData = exports.createData = exports.message = void 0;
var message;
(function (message) {
    message["SUCCESS"] = "success";
    message["FAILED"] = "failed";
})(message = exports.message || (exports.message = {}));
function createData(o) {
    const timestamp = new Date();
    return Object.assign({
        version: 1,
        createdAt: timestamp,
        updatedAt: timestamp,
    }, o);
}
exports.createData = createData;
function updateData(currentValues, updatedValues) {
    return Object.assign(updatedValues, {
        updatedAt: new Date(),
        version: currentValues.version + 1,
    });
}
exports.updateData = updateData;
function GetResponse(data, status, message) {
    return {
        statusCode: status,
        message: message,
        data,
    };
}
exports.GetResponse = GetResponse;
//# sourceMappingURL=created.helper.js.map