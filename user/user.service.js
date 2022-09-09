"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const hash_pwd_1 = require("../utils/hash-pwd");
let UserService = class UserService {
    filter(user) {
        const { id, email, roles } = user;
        return { id, email, roles: [] };
    }
    async register(newUser) {
        const user = new user_entity_1.User();
        user.email = newUser.email;
        user.pwdHash = (0, hash_pwd_1.hashPwd)(newUser.pwd);
        await user.save();
        return this.filter(user);
    }
    async getOneUser(id) {
        return await user_entity_1.User.findOne({ where: { id } });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map