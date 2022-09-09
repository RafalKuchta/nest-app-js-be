declare const _default: () => {
    server: {
        ssl: boolean;
        domain: string;
        port: number;
        salt: number;
        secretKey: string;
    };
    mailer: {
        service: string;
        host: string;
        port: number;
        secure: boolean;
        user: string;
        pass: string;
        from: string;
        strict: boolean;
    };
    databaseMongo: {
        host: string;
    };
    databaseMaria: {
        name: string;
        host: string;
        port: number;
        username: string;
        password: string;
    };
};
export default _default;
