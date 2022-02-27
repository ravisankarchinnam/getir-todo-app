"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// add the envitoment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// handle json responses
app.use(bodyParser.json());
// Enable cors origin.
app.use((0, cors_1.default)());
// Enable various security helpers.
app.use((0, helmet_1.default)());
// add the routes middleware and 404 handler
app.use("/", routes_1.default);
app.use((req, res, next) => {
    const err = new Error("Not Found");
    res.sendStatus(404);
    next(err);
});
//start the server
app.listen(process.env.PORT || 3030, () => {
    console.log(`🚀 API running on port ${process.env.PORT || 3030}`);
});
//# sourceMappingURL=app.js.map