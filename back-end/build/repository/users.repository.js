"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = require("../model/users.model");
class AuthRespository {
    constructor() {
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            return yield users_model_1.Users.create(payload);
        });
        this.findByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            return yield users_model_1.Users.findOne({
                where: {
                    email,
                }
            });
        });
        this.findByXid = (xid) => __awaiter(this, void 0, void 0, function* () {
            return users_model_1.Users.findOne({
                where: {
                    xid,
                }
            });
        });
        this.findAll = (payload) => __awaiter(this, void 0, void 0, function* () {
            // define nilai payload
            let limit = null;
            let offset = null;
            // const filter = payload.filters;
            // parsing sort option
            const { order } = this.parseSortBy(payload.sortBy);
            // define where
            const where = {};
            if (payload.showAll) {
                limit = payload.limit;
                offset = payload.skip;
            }
            return yield users_model_1.Users.findAndCountAll({
                where,
                limit,
                offset,
                order,
            });
        });
        this.update = (id, updatedValues, version) => __awaiter(this, void 0, void 0, function* () {
            const result = yield users_model_1.Users.update(updatedValues, {
                where: { id, version },
            });
            return result[0];
        });
        this.deleteUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield users_model_1.Users.destroy({
                where: {
                    id,
                },
            });
        });
        this.parseSortBy = (sortBy) => {
            // determine sorting option
            let order;
            switch (sortBy) {
                case 'createdAt-asc': {
                    order = [['createdAt', 'ASC']];
                    break;
                }
                case 'createdAt-desc': {
                    order = [['createdAt', 'DESC']];
                    break;
                }
                case 'updatedAt-asc': {
                    order = [['updatedAt', 'ASC']];
                    break;
                }
                case 'updatedAt-desc': {
                    order = [['updatedAt', 'DESC']];
                    break;
                }
                default: {
                    order = [['createdAt', 'DESC']];
                }
            }
            return { order };
        };
    }
    static getInstance() {
        if (!AuthRespository.instance) {
            AuthRespository.instance = new AuthRespository();
        }
        return AuthRespository.instance;
    }
}
exports.default = AuthRespository.getInstance();
//# sourceMappingURL=users.repository.js.map