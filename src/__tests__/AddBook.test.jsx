import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddBook from "../pages/AddBook";

// Mock do localStorage
global.localStorage = {
  getItem: vi.fn(() => JSON.stringify([])),
  setItem: vi.fn(),
  clear: vi.fn(),
};

const renderWithRouter = (component) => {
  return render(<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{component}</BrowserRouter>);
};

describe("AddBook Page", () => {
  it("deve renderizar o formulário de adicionar livro", () => {
    renderWithRouter(<AddBook />);
    // CORREÇÃO: O título correto é "Cadastrar Novo Livro"
    expect(screen.getByText(/Cadastrar Novo Livro/i)).toBeInTheDocument();
  });

  it("deve ter campos de formulário", () => {
    renderWithRouter(<AddBook />);
    expect(screen.getByLabelText(/Título do Livro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Autor\(a\)/i)).toBeInTheDocument();
  });

  it("deve ter botão de cadastrar", () => {
    renderWithRouter(<AddBook />);
    // CORREÇÃO: O botão correto tem o nome "Cadastrar Livro"
    expect(
      screen.getByRole("button", { name: /Cadastrar Livro/i }),
    ).toBeInTheDocument();
  });
});

