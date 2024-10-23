import swaggerJSDoc from "swagger-jsdoc";

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

export const swaggerSpec = swaggerJSDoc(options);
