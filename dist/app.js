"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const app = (0, express_1.default)();
// Definição da documentação do Swagger
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
    apis: ['./src/**/*.ts'], // Certifique-se de documentar os endpoints REST corretamente
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Servir a documentação do Swagger via Express
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.listen(3001, () => {
    console.log('Swagger UI disponível em http://localhost:3001/docs');
});
