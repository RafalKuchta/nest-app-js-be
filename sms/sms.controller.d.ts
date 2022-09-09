import { SmsService } from './sms.service';
import { CreateSmDto, CreateSmsDto } from './dto/create-sm.dto';
import { User } from "../user/user.entity";
export declare class SmsController {
    private readonly smsService;
    constructor(smsService: SmsService);
    create(createSmDto: CreateSmDto, user: User): Promise<import("../interfaces/sms").AddSmsResponse>;
    send(createSmsDto: CreateSmsDto, user: User): Promise<import("../interfaces/sms").SendResponse>;
    findAll(): Promise<import("../interfaces/sms").AddSmsResponse[]>;
    findAllGroups(): Promise<import("../interfaces/sms").SendGroupResponse[]>;
    findOneNumber(id: string): Promise<import("./entities/phone.entity").Phone>;
    update(id: string, CreateSmDto: CreateSmDto): Promise<{
        isSuccess: boolean;
    }>;
    remove(id: string): string;
}
