import { Response } from 'express';
import { AuthLoginDto } from "./dto/auth-login.dto";
import { User } from "../user/user.entity";
export declare class AuthService {
    private createToken;
    private generateToken;
    login(req: AuthLoginDto, res: Response): Promise<any>;
    check(user: User, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(user: User, res: Response): Promise<Response<any, Record<string, any>>>;
}
