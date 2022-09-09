import { BaseEntity } from "typeorm";
export declare class Chat extends BaseEntity {
    id: string;
    message: string;
    user: string;
    created_at: Date;
}
