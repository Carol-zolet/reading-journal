// src/mocks/server.js
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Configura o servidor de mocks com os handlers definidos
export const server = setupServer(...handlers);
