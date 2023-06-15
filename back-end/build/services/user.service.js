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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const created_helper_1 = require("../helpers/created.helper");
const users_repository_1 = __importDefault(require("../repository/users.repository"));
class User {
    constructor() {
        this.userRepository = users_repository_1.default;
        this.findAll = (payload) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.findAll(payload);
            const userArr = [];
            for (const user of users.rows) {
                userArr.push(this.composeUser(user));
            }
            return {
                data: userArr,
                count: users.count,
            };
        });
        this.findUser = (payload) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByXid(payload.xid);
            if (!user) {
                throw Error("found");
            }
            return this.composeUser(user);
        });
        this.updateUser = (payload) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByXid(payload.xid);
            if (!user) {
                throw Error("found");
            }
            const updateValue = (0, created_helper_1.updateData)(user, {
                username: payload.username,
                jenisKelamin: payload.jenisKelamin,
                tanggalLahir: payload.tanggalLahir,
                alamat: payload.alamat,
            });
            const result = yield this.userRepository.update(user.id, updateValue, payload.version);
            if (result === 0) {
                throw new Error("version");
            }
            Object.assign(user, updateValue);
            return this.composeUser(user);
        });
        this.deleteUser = (payload) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByXid(payload.xid);
            if (!user) {
                throw Error("found");
            }
            const result = yield this.userRepository.deleteUserById(user.id);
            if (result === 0) {
                throw Error("found");
            }
            console.log(`delete user : ${user.email}`);
            console.log(`delete user id : ${user.xid}`);
        });
        this.composeUser = (row) => {
            return {
                xid: row.xid,
                username: row.username,
                email: row.email,
                tanggalLahir: row.tanggalLahir,
                alamat: row.alamat,
                jenisKelamin: row.jenisKelamin,
                createdAt: row.createdAt,
                updateAt: row.updatedAt,
            };
        };
    }
}
exports.default = new User();
//# sourceMappingURL=user.service.js.map