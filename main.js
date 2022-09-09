"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const configuration_1 = require("./utils/config/configuration");
const cookieParser = require("cookie-parser");
const cors_config_1 = require("./utils/config/cors-config");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = (await core_1.NestFactory.create(app_module_1.AppModule));
    app.use(cookieParser());
    app.use((0, helmet_1.default)());
    app.enableCors({
        origin: cors_config_1.whitelistCors.address,
        methods: cors_config_1.whitelistCors.methods,
        credentials: true,
        optionsSuccessStatus: 200,
    });
    await app.listen((0, configuration_1.default)().server.port, (0, configuration_1.default)().server.domain, () => {
        console.log('Your .ENV:');
        console.log((0, configuration_1.default)());
        console.log('Your CORS whitelist:');
        console.log(cors_config_1.whitelistCors.address);
        console.log(cors_config_1.whitelistCors.methods);
    });
}
(async () => {
    await bootstrap();
})();
//# sourceMappingURL=main.js.map