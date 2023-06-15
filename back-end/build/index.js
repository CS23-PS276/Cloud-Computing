"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const auth_router_1 = __importDefault(require("./routers/auth.router"));
const datasource_common_1 = require("./common/datasource.common");
const user_router_1 = __importDefault(require("./routers/user.router"));
const lansia_router_1 = __importDefault(require("./routers/lansia.router"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, compression_1.default)({
            level: 6,
            threshold: 10 * 1000,
        }));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
        datasource_common_1.dataSources.init(config_1.config);
    }
    routes() {
        this.app.use("/", auth_router_1.default);
        this.app.use("/users", user_router_1.default);
        this.app.use("/lansia", lansia_router_1.default);
    }
}
const port = config_1.config.port;
const app = new App().app;
app.listen(port);
//# sourceMappingURL=index.js.map