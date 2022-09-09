export interface JwtPayload {
    id: string;
}
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload, done: (error: any, user: any) => void): Promise<void>;
}
export {};
