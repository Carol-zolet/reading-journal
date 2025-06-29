import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Sobre from "../pages/Sobre";

describe("About Page", () => {
  const renderWithRouter = (component) =>
    render(<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{component}</BrowserRouter>);

  it("deve renderizar o título principal", () => {
    renderWithRouter(<Sobre />);
    expect(
      screen.getByRole("heading", { name: /Sobre o Reading Journal/i }),
    ).toBeInTheDocument();
  });

  it("deve conter os chips de tecnologia específicos", () => {
    renderWithRouter(<Sobre />);

    // CORREÇÃO: Procuramos pelo texto exato dentro dos chips para sermos específicos.
    // O log de erro nos mostrou que o chip era "React 18" e não apenas "React".
    expect(screen.getByText("React 18")).toBeInTheDocument();
    expect(screen.getByText("React Router")).toBeInTheDocument();
    expect(screen.getByText("Material-UI")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
  });
});

