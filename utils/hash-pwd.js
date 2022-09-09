"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPwd = void 0;
const crypto = require("crypto");
const hashPwd = (p) => {
    const hmac = crypto.createHmac('sha512', 'rwt w3254t  W f#W F#hfLFF iOISg4w83F)*0 09j09J09GJ094094WJ4E 09J  jElfEJLIFJ# of3 jf(ghndg #J#p9f3j9f #FjFjL#Fh o3hfwofdg 6556u53');
    hmac.update(p);
    return hmac.digest('hex');
};
exports.hashPwd = hashPwd;
//# sourceMappingURL=hash-pwd.js.map