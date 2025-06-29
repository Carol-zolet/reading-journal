import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/Layout/Header";

const theme = createTheme();

const HeaderWithProviders = () => (
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  </BrowserRouter>
);

describe("Header Component", () => {
  it("deve renderizar o título Reading Journal", () => {
    render(<HeaderWithProviders />);
    expect(screen.getByText("Reading Journal")).toBeInTheDocument();
  });

  it("deve renderizar os links de navegação", () => {
    render(<HeaderWithProviders />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Livros")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
  });
});
