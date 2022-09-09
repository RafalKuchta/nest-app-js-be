import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthLoginDto } from "./dto/auth-login.dto";
import { User } from "../user/user.entity";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(req: AuthLoginDto, res: Response): Promise<any>;
    check(user: User, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(user: User, res: Response): Promise<Response<any, Record<string, any>>>;
}
