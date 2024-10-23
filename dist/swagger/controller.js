"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUI = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
// Definição da documentação Swagger
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
    apis: ['./src/**/*.ts'], // Certifique-se de que sua documentação está aqui
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Função Lambda para servir o Swagger UI
const swaggerUI = async (_event, _context) => {
    const app = (0, express_1.default)();
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Swagger UI</title>
    </head>
    <body>
      <div id="swagger-ui"></div>
    </body>
    </html>
  `;
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: html,
    };
};
exports.swaggerUI = swaggerUI;
