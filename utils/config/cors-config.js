"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitelistCors = void 0;
const configuration_1 = require("./configuration");
const { ssl, port, domain } = (0, configuration_1.default)().server;
const whitelistAddress = [
    `${ssl ? 'https://' : 'http://'}${domain}:3000`,
];
const whitelistMethod = [`GET`, 'PUT', 'POST', 'PATCH'];
exports.whitelistCors = {
    address: whitelistAddress,
    methods: whitelistMethod,
};
//# sourceMappingURL=cors-config.js.map