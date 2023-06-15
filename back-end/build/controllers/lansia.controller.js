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
const parser_helper_1 = require("../common/parser.helper");
const lansia_services_1 = __importDefault(require("../services/lansia.services"));
class LansiaController {
    constructor() {
        this.service = lansia_services_1.default;
        this.findByXid = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const payload = {
                xid: req.params.xid,
            };
            try {
                const result = yield this.service.findLansia(payload);
                response = (0, created_helper_1.GetResponse)(result, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                switch (error.message) {
                    case "found": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "Lansia not found"
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
        this.findAllLansia = (req, res) => __awaiter(this, void 0, void 0, function* () {
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
        this.createLansia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            let payload = req.body;
            let user = req.app.locals.user;
            try {
                const result = yield this.service.createLansia(payload, user);
                response = (0, created_helper_1.GetResponse)(result, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                response = (0, created_helper_1.GetResponse)(error, 500, created_helper_1.message.FAILED);
            }
            return res.send(response);
        });
        this.deleteLansia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let response;
            const payload = {
                xid: req.params.xid,
            };
            try {
                const result = yield this.service.deleteLansia(payload);
                response = (0, created_helper_1.GetResponse)({
                    data: "Lansia berhasil di hapus"
                }, 200, created_helper_1.message.SUCCESS);
            }
            catch (error) {
                switch (error.message) {
                    case "found": {
                        response = (0, created_helper_1.GetResponse)({
                            data: "Lansia not found"
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
exports.default = new LansiaController();
//# sourceMappingURL=lansia.controller.js.map