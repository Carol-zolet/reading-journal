import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import BooksList from '../pages/BooksList';

vi.mock('../services/api', () => ({
  getBooks: vi.fn(),
  deleteBook: vi.fn()
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

describe('BooksList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza o titulo da pagina', async () => {
    const { getBooks } = await import('../services/api');
    getBooks.mockResolvedValue([]);
    
    render(<BooksList />, { wrapper: MemoryRouter });
    
    await waitFor(() => {
      expect(screen.getByText('Minha Biblioteca Digital')).toBeInTheDocument();
    });
  });

  it('mostra a mensagem quando nao ha livros', async () => {
    const { getBooks } = await import('../services/api');
    getBooks.mockResolvedValue([]);
    
    render(<BooksList />, { wrapper: MemoryRouter });
    
    await waitFor(() => {
      expect(screen.getByText('Sua biblioteca esta vazia')).toBeInTheDocument();
    });
  });
});
