"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/user.entity");
const hash_pwd_1 = require("../utils/hash-pwd");
const uuid_1 = require("uuid");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthService = class AuthService {
    createToken(currentTokenId) {
        const payload = { id: currentTokenId };
        const expiresIn = 60 * 60 * 24;
        const accessToken = (0, jsonwebtoken_1.sign)(payload, 'JDwoi doi o#OOI F#3fOAoJF*#fooiN hf3OIC OJ o jf#OJCOjoJFo#CO#CoqCMoc#OCMOIDoij oCOMowCOcO#OI3J*#*#*#* FfjCNoo@w*&$08@*&@)*#)(C p9', { expiresIn });
        return {
            accessToken,
            expiresIn,
        };
    }
    ;
    async generateToken(user) {
        let token;
        let userWithThisToken = null;
        do {
            token = (0, uuid_1.v4)();
            userWithThisToken = await user_entity_1.User.findOne({
                where: {
                    currentTokenId: token
                }
            });
        } while (!!userWithThisToken);
        user.currentTokenId = token;
        await user.save();
        return token;
    }
    ;
    async login(req, res) {
        try {
            const user = await user_entity_1.User.findOne({
                where: {
                    email: req.email,
                    pwdHash: (0, hash_pwd_1.hashPwd)(req.pwd),
                }
            });
            if (!user) {
                return res.json({ error: 'Invalid login data!' });
            }
            const token = await this.createToken(await this.generateToken(user));
            return res
                .cookie('jwt', token.accessToken, {
                secure: false,
                domain: 'localhost',
                httpOnly: true,
            })
                .json({
                ok: true,
                email: user.email,
                message: "Udało się zalogować!"
            });
        }
        catch (e) {
            return res.json({ error: e.message });
        }
    }
    ;
    async check(user, res) {
        try {
            if (user.currentTokenId)
                return res.json({
                    ok: true,
                    email: user.email,
                    roles: user.roles,
                });
        }
        catch (e) {
            return res.json({
                ok: false,
                error: e.message
            });
        }
    }
    async logout(user, res) {
        console.log(user, res);
        try {
            user.currentTokenId = null;
            await user.save();
            res.clearCookie('jwt', {
                secure: false,
                domain: 'localhost',
                httpOnly: true,
            });
            return res.json({ ok: true });
        }
        catch (e) {
            return res.json({ error: e.message });
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map