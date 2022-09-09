import { BaseEntity } from "typeorm";
import { Group } from "./group.entity";
export declare class Phone extends BaseEntity {
    id: string;
    name: string;
    surname: string;
    position: string;
    company: string;
    phone: string;
    groups: Group;
}
