import "dotenv/config";
import Express from "express";
import cors from "cors";
import router from "./routes";

// Importing the Swegger documentation setup
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = Express();
const PORT = process.env["PORT"] ?? 3000;

// Configuration for Swagger documentation
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CoreWallet API",
      version: "1.0.0",
      description: "API para gerenciamento de carteiras digitais",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  // Who is going to be scanned for annotations to generate the documentation
  apis: ["./src/routes.ts", "./src/controller/*.ts"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(cors());
app.use(Express.json());

// Route to serve the Swagger documentation (Always before app.use(router))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Swagger documentation available at http://localhost:${PORT}/api-docs`,
  );
});
