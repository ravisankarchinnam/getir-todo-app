import swaggerJSDoc from "swagger-jsdoc";

const initializeSwagger = () => {
  const options = {
    swaggerDefinition: {
      info: {
        title: "Getir Todo API",
        version: "1.0.0",
        description: "Todo Swagger API documentation, basically to perform CRUD operations on TODO collection",
        contact: {
          email: "https://github.com/ravisankarchinnam",
        },
      },
    },
    apis: ["swagger.yaml"],
  };

  return swaggerJSDoc(options);
};

export default initializeSwagger;
