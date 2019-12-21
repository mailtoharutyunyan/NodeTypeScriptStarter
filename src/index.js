"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Test_1 = require("./model/Test");
const app = express_1.default();
const model = new Test_1.Test("Express App", 5);
app.get('/', (request, response) => {
    response.status(200).json(model);
});
const port = 3000;
app.listen(port, () => console.log(`Express server started on port ${port}`));
