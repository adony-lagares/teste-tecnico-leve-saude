"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Agendamento',
        version: '1.0.0',
        description: 'Documentação da API de Agendamento',
    },
    servers: [
        {
            url: 'http://localhost:3000/dev',
            description: 'Servidor Local',
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ['./src/**/*.ts'],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
