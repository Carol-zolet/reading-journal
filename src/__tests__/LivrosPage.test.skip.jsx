// src/__tests__/LivrosPage.test.jsx (VERSÃO FINAL E CORRIGIDA)
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/server.js";
import LivrosPage from "../pages/LivrosPage";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithRouter = (ui) => render(ui, { wrapper: MemoryRouter });

describe("Página LivrosPage", () => {
  it("deve mostrar os livros quando a API retorna dados", async () => {
    const mockBooks = [
      { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
    ];
    server.use(
      http.get("http://localhost:5000/books", () => {
        return HttpResponse.json(mockBooks);
      }),
    );

    renderWithRouter(<LivrosPage />);

    expect(await screen.findByText(/O Senhor dos Anéis/i)).toBeInTheDocument();
  });

  it("deve mostrar a mensagem correta quando a lista está vazia", async () => {
    server.use(
      http.get("http://localhost:5000/books", () => {
        return HttpResponse.json([]);
      }),
    );

    renderWithRouter(<LivrosPage />);

    expect(
      await screen.findByText(/Nenhum livro cadastrado/i),
    ).toBeInTheDocument();
  });
});

