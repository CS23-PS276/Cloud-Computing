'use strict';
const { CommonColumn } = require("../columns");
const { id, version, createdAt, updatedAt,  xid} = CommonColumn;
const tableName = 'users';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id,
      version,
      createdAt,
      updatedAt,
      xid,
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggalLahir: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      jenisKelamin: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};