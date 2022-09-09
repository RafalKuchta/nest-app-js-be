import { BaseEntity } from "typeorm";
export declare class Sms extends BaseEntity {
    id: string;
    name: string;
    surname: string;
    company: string;
    phone: string;
    group: string;
    sms: string;
}
