"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsController = void 0;
const common_1 = require("@nestjs/common");
const sms_service_1 = require("./sms.service");
const create_sm_dto_1 = require("./dto/create-sm.dto");
const passport_1 = require("@nestjs/passport");
const user_obj_decorator_1 = require("../decorators/user-obj.decorator");
const user_entity_1 = require("../user/user.entity");
let SmsController = class SmsController {
    constructor(smsService) {
        this.smsService = smsService;
    }
    create(createSmDto, user) {
        return this.smsService.create(createSmDto);
    }
    send(createSmsDto, user) {
        return this.smsService.send(createSmsDto);
    }
    findAll() {
        return this.smsService.findAll();
    }
    findAllGroups() {
        return this.smsService.findAllGroups();
    }
    findOneNumber(id) {
        return this.smsService.findOneNumber(id);
    }
    update(id, CreateSmDto) {
        return this.smsService.update(id, CreateSmDto);
    }
    remove(id) {
        return this.smsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/add-phone'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_obj_decorator_1.UserObj)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sm_dto_1.CreateSmDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/sms-send'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_obj_decorator_1.UserObj)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sm_dto_1.CreateSmsDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "send", null);
__decorate([
    (0, common_1.Get)('/get-all'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/groups/get-all'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "findAllGroups", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "findOneNumber", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_sm_dto_1.CreateSmDto]),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "remove", null);
SmsController = __decorate([
    (0, common_1.Controller)('sms'),
    __metadata("design:paramtypes", [sms_service_1.SmsService])
], SmsController);
exports.SmsController = SmsController;
//# sourceMappingURL=sms.controller.js.map