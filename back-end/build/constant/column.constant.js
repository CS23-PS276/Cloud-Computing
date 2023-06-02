"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonColumn = exports.DEFAULT_VERSION = exports.DEFAULT_TIMESTAMP = void 0;
const sequelize_1 = require("sequelize");
exports.DEFAULT_TIMESTAMP = '2000-01-01 00:00:00';
exports.DEFAULT_VERSION = 1;
const id = {
    type: sequelize_1.DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
};
const version = {
    type: sequelize_1.DataTypes.INTEGER,
    allowNull: false,
    defaultValue: exports.DEFAULT_VERSION,
};
const createdAt = {
    type: sequelize_1.DataTypes.DATE,
    allowNull: false,
    defaultValue: exports.DEFAULT_TIMESTAMP,
};
const updatedAt = {
    type: sequelize_1.DataTypes.DATE,
    allowNull: false,
    defaultValue: exports.DEFAULT_TIMESTAMP,
};
const xid = {
    type: sequelize_1.DataTypes.STRING,
    allowNull: false,
    unique: true,
};
exports.CommonColumn = {
    id,
    version,
    createdAt,
    updatedAt,
    xid,
};
//# sourceMappingURL=column.constant.js.map