import { RolesBuilder } from "nest-access-control";
export declare enum UserRoles {
    Admin = "admin",
    Reader = "reader"
}
export declare const roles: RolesBuilder;
