import { CreateSmDto, CreateSmsDto } from './dto/create-sm.dto';
import { AddGroupResponse, AddSmsResponse, SendGroupResponse, SendResponse } from "../interfaces/sms";
import { Phone } from "./entities/phone.entity";
import { Group } from "./entities/group.entity";
export declare class SmsService {
    filter(phoneToAdd: Phone): AddSmsResponse;
    filterGroup(groupToAdd: Group): AddGroupResponse;
    create(createSmDto: CreateSmDto): Promise<AddSmsResponse>;
    send(createSmsDto: CreateSmsDto): Promise<SendResponse>;
    findAll(): Promise<AddSmsResponse[]>;
    findAllGroups(): Promise<SendGroupResponse[]>;
    findOneNumber(id: string): Promise<Phone>;
    update(id: string, req: CreateSmDto): Promise<{
        isSuccess: boolean;
    }>;
    remove(id: number): string;
}
