"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    var _a;
    return ({
        server: {
            ssl: process.env.SSL === 'true',
            domain: process.env.DOMAIN || 'localhost',
            port: parseInt(process.env.PORT, 10) || 3001,
            salt: parseInt(process.env.SALT_ROUND),
            secretKey: process.env.SECRET_OR_KEY,
        },
        mailer: {
            service: (_a = process.env.SERVICE_MAILER) !== null && _a !== void 0 ? _a : null,
            host: process.env.HOST_MAILER,
            port: parseInt(process.env.PORT_MAILER),
            secure: process.env.SECURE_MAILER === 'true',
            user: process.env.AUTH_USER_NAME_MAILER,
            pass: process.env.AUTH_USER_PASS_MAILER,
            from: process.env.FROM_MAILER,
            strict: process.env.STRICT_MAILER !== 'false',
        },
        databaseMongo: {
            host: process.env.DB_NOSQL,
        },
        databaseMaria: {
            name: process.env.DB_DATABASE_SQL,
            host: process.env.DB_HOST_SQL,
            port: parseInt(process.env.DB_PORT_SQL),
            username: process.env.DB_USERNAME_SQL,
            password: process.env.DB_PASSWORD_SQL,
        },
    });
};
//# sourceMappingURL=configuration.js.map