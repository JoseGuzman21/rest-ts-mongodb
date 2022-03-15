import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion API of posts and users",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      user: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      posts: {
        type: "object",
        required: ["title", "url", "content", "img"],
        properties: {
          title: {
            type: "string",
          },
          url: {
            type: "string",
          },
          content: {
            type: "string",
          },
          img: {
            type: "string",
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: [
      "./../../../interfaces/views/users/presentation/controllers/UserController.ts",
      "./../../../interfaces/views/users/presentation/routes/*.ts"
    ],
};

export default swaggerJSDoc(swaggerOptions);