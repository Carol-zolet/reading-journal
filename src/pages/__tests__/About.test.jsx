import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../../pages/About';

const renderComponent = () => {
  render(<About />, { wrapper: MemoryRouter });
};

describe('Pagina Sobre', () => {
  it('deve renderizar o titulo principal da pagina', () => {
    renderComponent();
    expect(
      screen.getByRole("heading", { name: /Reading Journal/i }),
    ).toBeInTheDocument();
  });

  it('deve renderizar a secao Nossa Missao', () => {
    renderComponent();
    expect(
      screen.getByRole("heading", { name: /Nossa Missao/i }),
    ).toBeInTheDocument();
  });

  it('deve renderizar a secao de Tecnologias Utilizadas', () => {
    renderComponent();
    expect(
      screen.getByRole("heading", { name: /Tecnologias Utilizadas/i }),
    ).toBeInTheDocument();
  });
});
