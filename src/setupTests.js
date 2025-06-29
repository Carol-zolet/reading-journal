// src/setupTests.js
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server.js";

// Inicia o servidor antes de todos os testes
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Limpa os mocks depois de cada teste
afterEach(() => server.resetHandlers());

// Fecha o servidor ao final de tudo
afterAll(() => server.close());
