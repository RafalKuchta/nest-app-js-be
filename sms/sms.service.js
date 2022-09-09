"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const phone_entity_1 = require("./entities/phone.entity");
const sms_entity_1 = require("./entities/sms.entity");
const group_entity_1 = require("./entities/group.entity");
let SmsService = class SmsService {
    filter(phoneToAdd) {
        const { id, phone, name, surname, company, position, groups } = phoneToAdd;
        return { id, phone, name, surname, company, position, groups };
    }
    filterGroup(groupToAdd) {
        const { id, name } = groupToAdd;
        return { id, name };
    }
    async create(createSmDto) {
        const phone = new phone_entity_1.Phone();
        phone.name = createSmDto.name;
        phone.surname = createSmDto.surname;
        phone.company = createSmDto.company;
        phone.position = createSmDto.position;
        phone.phone = createSmDto.phone;
        await phone.save();
        return this.filter(phone);
    }
    async send(createSmsDto) {
        const sms = new sms_entity_1.Sms();
        sms.phone = createSmsDto.mobile_number;
        sms.sms = createSmsDto.message;
        if (createSmsDto.mobile_number.length > 5) {
            await sms.save();
        }
        if (createSmsDto.phones) {
            for (const item of createSmsDto.phones) {
                const sms2 = new sms_entity_1.Sms();
                sms2.phone = '+48' + item.phone;
                sms2.sms = createSmsDto.message;
                await sms2.save();
            }
            return {
                message: 'ok',
            };
        }
        if (createSmsDto.groups) {
            for (const item of createSmsDto.groups) {
                if (item.group === 'Próbkobiorcy') {
                    const allProbkoPhones = await phone_entity_1.Phone.find();
                    for (const allphones of allProbkoPhones) {
                        const smsToAll = new sms_entity_1.Sms();
                        smsToAll.phone = '+48' + allphones.phone;
                        smsToAll.name = allphones.name;
                        smsToAll.surname = allphones.surname;
                        smsToAll.company = allphones.company;
                        smsToAll.group = item.group;
                        smsToAll.sms = createSmsDto.message;
                        await smsToAll.save();
                    }
                }
                const phonesFromGroups = await phone_entity_1.Phone.find({
                    where: {
                        company: item.group,
                    }
                });
                for (const phonesFromGroup of phonesFromGroups) {
                    const smsToGroup = new sms_entity_1.Sms();
                    smsToGroup.phone = '+48' + phonesFromGroup.phone;
                    smsToGroup.name = phonesFromGroup.name;
                    smsToGroup.surname = phonesFromGroup.surname;
                    smsToGroup.company = phonesFromGroup.company;
                    smsToGroup.group = item.group;
                    smsToGroup.sms = createSmsDto.message;
                    await smsToGroup.save();
                }
            }
        }
        return {
            message: 'ok',
        };
    }
    async findAll() {
        return (await phone_entity_1.Phone.find({
            relations: ['groups'],
        })).map(this.filter);
    }
    async findAllGroups() {
        return (await group_entity_1.Group.find()).map(this.filterGroup);
    }
    async findOneNumber(id) {
        return await phone_entity_1.Phone.findOne({
            where: {
                id,
            },
            relations: {
                groups: true,
            },
        });
    }
    async update(id, req) {
        if (!id) {
            throw new Error('Task not found!');
        }
        const phone = await phone_entity_1.Phone.findOne({
            where: {
                id,
            }
        });
        if (phone) {
            phone.name = req.name;
            phone.surname = req.surname;
            phone.company = req.company;
            phone.position = req.position;
            phone.phone = req.phone;
            await phone.save();
            if (req.group) {
                const group = await group_entity_1.Group.findOne({
                    where: {
                        name: req.group,
                    },
                });
                phone.groups = group;
                await phone.save();
            }
            else {
                phone.groups = null;
                await phone.save();
            }
            return {
                isSuccess: true,
            };
        }
        return {
            isSuccess: false,
        };
    }
    remove(id) {
        return `This action removes a #${id} sm`;
    }
};
SmsService = __decorate([
    (0, common_1.Injectable)()
], SmsService);
exports.SmsService = SmsService;
//# sourceMappingURL=sms.service.js.map