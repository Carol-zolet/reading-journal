// src/pages/LivrosPage.jsx (VERSÃO FINAL E CORRIGIDA)
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Box, Button, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { Add as AddIcon } from '@mui/icons-material';
import BooksList from './BooksList';
import { getBooks } from '../services/api';

const LivrosPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      setError('Falha ao carregar os livros.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">📚 Meus Livros</Typography>
        <Button component={Link} to="/livros/novo" variant="contained" startIcon={<AddIcon />}>
          Adicionar Livro
        </Button>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <BooksList books={books} loading={loading} onRefresh={fetchBooks} />
    </Container>
  );
};
export default LivrosPage;
