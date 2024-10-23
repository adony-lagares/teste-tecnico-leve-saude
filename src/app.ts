import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

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

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3001, () => {
  console.log("Swagger UI disponível em http://localhost:3001/docs");
});
