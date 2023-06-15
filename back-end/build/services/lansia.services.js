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
const gender_constant_1 = require("../constant/gender.constant");
const kebutuhan_constant_1 = require("../constant/kebutuhan.constant");
const language_constant_1 = require("../constant/language.constant");
const mobilitas_constant_1 = require("../constant/mobilitas.constant");
const penyakit_constant_1 = require("../constant/penyakit.constant");
const relation_constant_1 = require("../constant/relation.constant");
const created_helper_1 = require("../helpers/created.helper");
const lansia_repository_1 = __importDefault(require("../repository/lansia.repository"));
const CryptoSecure_1 = __importDefault(require("../utils/CryptoSecure"));
class Lansia {
    constructor() {
        this.LansiaRepository = lansia_repository_1.default;
        this.findAll = (payload) => __awaiter(this, void 0, void 0, function* () {
            const Lansias = yield this.LansiaRepository.findAll(payload);
            const LansiaArr = [];
            for (const Lansia of Lansias.rows) {
                LansiaArr.push(this.composeLansia(Lansia));
            }
            return {
                data: LansiaArr,
                count: Lansias.count,
            };
        });
        this.findLansia = (payload) => __awaiter(this, void 0, void 0, function* () {
            const Lansia = yield this.LansiaRepository.findByXid(payload.xid);
            if (!Lansia) {
                throw Error("found");
            }
            return this.composeLansia(Lansia);
        });
        this.createLansia = (payload, user) => __awaiter(this, void 0, void 0, function* () {
            const createdvalue = (0, created_helper_1.createData)({
                xid: CryptoSecure_1.default.createXid(),
                usersId: user.xid,
                username: payload.username,
                relation: payload.relation,
                dateBirthday: payload.dateBirthday,
                gender: (0, gender_constant_1.mapGender)(payload.gender),
                weigth: payload.weigth,
                height: payload.height,
                mobilitas: payload.mobilitas.join(","),
                kebutuhan: payload.kebutuhan.join(","),
                illness: payload.illness.join(","),
                detailIllness: payload.detailIllness,
                language: payload.language.join(","),
                alamat: payload.alamat,
                noTelp: payload.noTelp,
            });
            const result = yield this.LansiaRepository.create(createdvalue);
            return this.composeLansia(result);
        });
        this.deleteLansia = (payload) => __awaiter(this, void 0, void 0, function* () {
            const Lansia = yield this.LansiaRepository.findByXid(payload.xid);
            if (!Lansia) {
                throw Error("found");
            }
            const result = yield this.LansiaRepository.deleteUserById(Lansia.id);
            if (result === 0) {
                throw Error("found");
            }
            console.log(`delete Lansia : ${Lansia.username}`);
            console.log(`delete Lansia id : ${Lansia.xid}`);
        });
        this.composeLansia = (row) => {
            const kebutuhan = (0, kebutuhan_constant_1.kebutuhanResult)(row.kebutuhan.split(","));
            const mobilitas = (0, mobilitas_constant_1.getMobilitas)(row.mobilitas);
            const illness = (0, penyakit_constant_1.getIllnes)(row.illness);
            const language = (0, language_constant_1.getLanguages)(row.language);
            const result = {
                xid: row.xid,
                username: row.username,
                usersId: row.usersId,
                relation: (0, relation_constant_1.getRelation)(row.relation),
                dateBirthday: row.dateBirthday,
                gender: (0, gender_constant_1.toGender)(row.gender),
                height: row.height,
                weigth: row.weigth,
                detailIllness: row.detailIllness,
                alamat: row.alamat,
                noTelp: row.noTelp,
                createdAt: row.createdAt,
                updateAt: row.updatedAt,
            };
            Object.assign(result, kebutuhan);
            Object.assign(result, mobilitas);
            Object.assign(result, illness);
            Object.assign(result, language);
            return result;
        };
    }
}
exports.default = new Lansia();
//# sourceMappingURL=lansia.services.js.map