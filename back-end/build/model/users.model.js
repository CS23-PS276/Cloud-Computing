"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const column_constant_1 = require("../constant/column.constant");
const { id, version, createdAt, updatedAt, xid } = column_constant_1.CommonColumn;
class Users extends sequelize_1.Model {
    static initModel(sequelize) {
        return Users.init({
            id,
            version,
            createdAt,
            updatedAt,
            xid,
            username: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
            },
            alamat: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            tanggalLahir: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            jenisKelamin: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            password: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'users',
            timestamps: false,
        });
    }
}
exports.Users = Users;
//# sourceMappingURL=users.model.js.map