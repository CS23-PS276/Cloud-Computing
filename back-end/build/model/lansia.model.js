"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lansia = void 0;
const sequelize_1 = require("sequelize");
const column_constant_1 = require("../constant/column.constant");
const { id, version, createdAt, updatedAt, xid } = column_constant_1.CommonColumn;
class Lansia extends sequelize_1.Model {
    static initModel(sequelize) {
        return Lansia.init({
            id,
            version,
            createdAt,
            updatedAt,
            xid,
            usersId: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            relation: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            dateBirthday: {
                allowNull: true,
                type: sequelize_1.DataTypes.DATE,
            },
            gender: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
            },
            height: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
            },
            weigth: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
            },
            mobilitas: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            illness: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true,
            },
            kebutuhan: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true,
            },
            detailIllness: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true,
            },
            language: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            alamat: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true,
            },
            noTelp: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "lansia",
            timestamps: false,
        });
    }
}
exports.Lansia = Lansia;
//# sourceMappingURL=lansia.model.js.map