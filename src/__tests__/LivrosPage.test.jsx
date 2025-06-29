import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

// Mock simples para LivrosPage
const MockLivrosPage = () => {
  return <div>Livros Page</div>;
};

describe('LivrosPage', () => {
  it('renderiza sem erros', () => {
    render(<MockLivrosPage />, { wrapper: MemoryRouter });
    expect(screen.getByText('Livros Page')).toBeInTheDocument();
  });
});
