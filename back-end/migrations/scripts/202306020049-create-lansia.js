'use strict';
const { CommonColumn } = require("../columns");
const { id, version, createdAt, updatedAt,  xid} = CommonColumn;
const tableName = 'lansia';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id,
      version,
      createdAt,
      updatedAt,
      xid,
      usersId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: "users",
            key: "xid",
            as: "Users",
        }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateBirthday: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weigth: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      alergi: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mobilitas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      illness: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      language: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      noTelp: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};