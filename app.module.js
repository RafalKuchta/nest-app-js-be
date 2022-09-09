"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tasks_module_1 = require("./tasks/tasks.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const chat_gateway_1 = require("./chat/chat.gateway");
const chat_module_1 = require("./chat/chat.module");
const sms_module_1 = require("./sms/sms.module");
const nest_access_control_1 = require("nest-access-control");
const user_roles_1 = require("./auth/user.roles");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./utils/config/configuration");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: (0, configuration_1.default)().databaseMaria.host,
                port: (0, configuration_1.default)().databaseMaria.port,
                username: (0, configuration_1.default)().databaseMaria.username,
                password: (0, configuration_1.default)().databaseMaria.password,
                database: (0, configuration_1.default)().databaseMaria.name,
                entities: ['dist/**/**.entity{.ts,.js}'],
                bigNumberStrings: false,
                logging: false,
                synchronize: false,
            }),
            tasks_module_1.TasksModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            chat_module_1.ChatModule,
            sms_module_1.SmsModule,
            nest_access_control_1.AccessControlModule.forRoles(user_roles_1.roles),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, chat_gateway_1.ChatGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map