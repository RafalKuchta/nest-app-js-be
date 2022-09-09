import { User } from "../user/user.entity";
export declare class ChatGateway {
    server: any;
    handleMessage(message: string, user: User): Promise<void>;
}
