import { BaseEntity } from "typeorm";
import { Phone } from "./phone.entity";
export declare class Group extends BaseEntity {
    id: string;
    name: string;
    phone: Phone;
}
