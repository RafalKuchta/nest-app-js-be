import { RegisterDto } from "./dto/register.dto";
import { RegisterUserResponse } from "../interfaces/user";
import { User } from "./user.entity";
export declare class UserService {
    filter(user: User): RegisterUserResponse;
    register(newUser: RegisterDto): Promise<RegisterUserResponse>;
    getOneUser(id: string): Promise<User>;
}
