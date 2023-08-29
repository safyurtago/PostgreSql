const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "This is Backend Definition for Swagger APIs",
        version: '1.0.0',
        description: "This is the Swagger Definition for Swagger",
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: "Development server"
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ["src/swagger/*.swagger.js"],
};

const swaggerUi = require('swagger-ui-express');

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
}