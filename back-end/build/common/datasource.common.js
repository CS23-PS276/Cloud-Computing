"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSources = exports.DataSources = void 0;
const sequelize_1 = require("sequelize");
const model_1 = require("../model");
class AppDB {
    constructor(config) {
        this.conn = new sequelize_1.Sequelize({
            dialect: config.sequelizeDialect,
            host: config.sequelizeHost,
            port: config.sequelizeDbPort,
            username: config.sequelizeDbUser,
            password: config.sequelizeDbPass,
            database: config.sequelizeDbName,
        });
        (0, model_1.initModels)(this.conn);
        this.conn
            .sync()
            .then(() => {
            console.log('All models in Sequelize were synchronized successfully.');
        })
            .catch((error) => {
            console.error('An error occurred while synchronizing the models:', error);
        });
        console.log('Clear Seqeulize configuration');
    }
}
class DataSources {
    init(config) {
        console.log('Init AppConfiguraion');
        this.db = new AppDB(config);
    }
}
exports.DataSources = DataSources;
exports.dataSources = new DataSources();
//# sourceMappingURL=datasource.common.js.map