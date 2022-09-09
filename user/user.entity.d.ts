import { BaseEntity } from "typeorm";
import { UserRoles } from "../auth/user.roles";
export declare class User extends BaseEntity {
    id: string;
    email: string;
    pwdHash: string;
    currentTokenId: string | null;
    roles: UserRoles;
}
