import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { APIGatewayProxyHandler } from "aws-lambda";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Agendamento",
    version: "1.0.0",
    description: "Documentação da API de Agendamento",
  },
  servers: [
    {
      url: "http://localhost:3000/dev",
      description: "Servidor Local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerUI: APIGatewayProxyHandler = async (_event, _context) => {
  const app = express();

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
      "Content-Type": "text/html",
    },
    body: html,
  };
};
