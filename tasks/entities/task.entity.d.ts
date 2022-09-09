import { BaseEntity } from "typeorm";
export declare class Task extends BaseEntity {
    id: string;
    name: string;
    completed: boolean;
    user: string;
}
