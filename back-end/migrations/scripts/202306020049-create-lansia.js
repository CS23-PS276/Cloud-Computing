"use strict";
const { CommonColumn } = require("../columns");
const { id, version, createdAt, updatedAt, xid } = CommonColumn;
const tableName = "lansia";
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
        },
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      relation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dateBirthday: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weigth: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      mobilitas: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      illness: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      kebutuhan: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      detailIllness: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      language: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      alamat: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      noTelp: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  },
};
