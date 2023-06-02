'use strict';
const { CommonColumn } = require("../columns");
const { id, version, createdAt, updatedAt,  xid} = CommonColumn;
const tableName = 'transaction';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id,
      version,
      createdAt,
      updatedAt,
      xid,
      idUsers: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "users",
          key: "xid",
          as: "Users",
        }
      },
      idLansia: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "lansia",
          key: "xid",
          as: "Lansia",
        }
      },
      idCareGiver: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "caregiver",
          key: "xid",
          as: "CareGiver"
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
  }
};