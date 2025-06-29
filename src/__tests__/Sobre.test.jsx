import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Sobre from "../pages/Sobre";

const theme = createTheme();

const SobreWithProviders = () => (
  <ThemeProvider theme={theme}>
    <Sobre />
  </ThemeProvider>
);

describe("Sobre Page", () => {
  it("deve renderizar título com emoji", () => {
    render(<SobreWithProviders />);
    expect(screen.getByText("📚 Sobre o Reading Journal")).toBeInTheDocument();
  });

  it("deve renderizar subtítulo da aplicação", () => {
    render(<SobreWithProviders />);
    expect(
      screen.getByText(
        "Uma aplicação moderna e intuitiva para organizar e acompanhar suas leituras",
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar seção O Projeto", () => {
    render(<SobreWithProviders />);
    expect(screen.getByText("O Projeto")).toBeInTheDocument();
  });
});
