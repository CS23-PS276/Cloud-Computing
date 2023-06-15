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
const user_service_1 = __importDefault(require("../services/user.service"));
const parser_helper_1 = require("../common/parser.helper");
class UsersController {
    constructor() {
        this.service = user_service_1.default;
        this.findByXid = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const payload = {
                xid: req.params.xid,
            };
            try {
                const result = yield this.service.findUser(payload);
                response = (0, created_helper_1.GetResponse)(result, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                switch (error.message) {
                    case "found": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "user not found"
                        }, 404, created_helper_1.message.FAILED);
                        break;
                    }
                    default: {
                        response = (0, created_helper_1.GetResponse)(error, 500, created_helper_1.message.FAILED);
                    }
                }
            }
            return res.send(response);
        });
        this.findAllUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const request = req.query;
            const payload = (0, parser_helper_1.getListOptions)(request);
            try {
                const result = yield this.service.findAll(payload);
                response = (0, created_helper_1.GetResponse)(result, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                response = (0, created_helper_1.GetResponse)(error, 500, created_helper_1.message.FAILED);
            }
            return res.send(response);
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const payload = req.body;
            payload.xid = req.params.xid;
            const user = req.app.locals.user;
            if (user.xid !== payload.xid) {
                return res.status(403).send((0, created_helper_1.GetResponse)({
                    data: "invalid user"
                }, 403, created_helper_1.message.FAILED));
            }
            try {
                const result = yield this.service.updateUser(payload);
                response = (0, created_helper_1.GetResponse)(result, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                switch (error.message) {
                    case "found": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "user not found"
                        }, 404, created_helper_1.message.FAILED);
                        break;
                    }
                    case "version": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "invalid version"
                        }, 400, created_helper_1.message.FAILED);
                        break;
                    }
                    default: {
                        response = (0, created_helper_1.GetResponse)(error, 500, created_helper_1.message.FAILED);
                    }
                }
            }
            return res.send(response);
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const payload = {
                xid: req.params.xid,
            };
            const user = req.app.locals.user;
            if (user.xid !== payload.xid) {
                return res.status(403).send((0, created_helper_1.GetResponse)({
                    data: "invalid user"
                }, 403, created_helper_1.message.FAILED));
            }
            try {
                const result = yield this.service.deleteUser(payload);
                response = (0, created_helper_1.GetResponse)({
                    data: "users berhasil di hapus"
                }, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                switch (error.message) {
                    case "found": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "user not found"
                        }, 404, created_helper_1.message.FAILED);
                        break;
                    }
                    default: {
                        response = (0, created_helper_1.GetResponse)(error, 500, created_helper_1.message.FAILED);
                    }
                }
            }
            return res.send(response);
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=users.controller.js.map