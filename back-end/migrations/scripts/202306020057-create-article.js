'use strict';
const { CommonColumn } = require("../columns");
const { id, version, createdAt, updatedAt,  xid} = CommonColumn;
const tableName = 'article';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id,
      version,
      createdAt,
      updatedAt,
      xid,
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      topic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};