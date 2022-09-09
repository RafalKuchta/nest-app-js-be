declare const _default: () => {
    server: {
        ssl: boolean;
        domain: string;
        port: number;
        salt: number;
        secretKey: string;
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
