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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const typeorm_1 = require("typeorm");
const group_entity_1 = require("./group.entity");
let Phone = class Phone extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Phone.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Phone.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Phone.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Phone.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Phone.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 15,
    }),
    __metadata("design:type", String)
], Phone.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => group_entity_1.Group, (entity) => entity.phone),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", group_entity_1.Group)
], Phone.prototype, "groups", void 0);
Phone = __decorate([
    (0, typeorm_1.Entity)()
], Phone);
exports.Phone = Phone;
//# sourceMappingURL=phone.entity.js.map