"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const users_model_1 = require("./users.model");
function initModels(sequelize) {
    users_model_1.Users.initModel(sequelize);
}
exports.initModels = initModels;
//# sourceMappingURL=index.js.map