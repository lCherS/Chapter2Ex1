import express from "express";
import swaggerUI from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };

// Create - name, email
// List -
// Show - id
// TurnADM - id

// - Informações gerais da API (nome, descrição, etc.);
// - Rotas;
// - Parâmetros;
// - Corpo da Requisição;
// - Respostas de sucesso;
// - Respostas de erro;
// - Exemplos.
