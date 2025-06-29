import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { getBooks, updateBook } from '../services/api';

const BookEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    titulo: '',
    autor: '',
    genero: '',
    dataLeitura: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadBook = async () => {
      try {
        const books = await getBooks();
        const foundBook = books.find(b => b.id === parseInt(id));
        if (foundBook) {
          setBook(foundBook);
        } else {
          setError('Livro não encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar livro');
      } finally {
        setLoading(false);
      }
    };
    loadBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, book);
      navigate('/livros');
    } catch (err) {
      setError('Erro ao atualizar livro');
    }
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  if (loading) return <Container><Typography>Carregando...</Typography></Container>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Editar Livro</Typography>
      
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Título"
          name="titulo"
          value={book.titulo}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Autor"
          name="autor"
          value={book.autor}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Gênero"
          name="genero"
          value={book.genero}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Data de Leitura"
          name="dataLeitura"
          type="date"
          value={book.dataLeitura}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button type="submit" variant="contained">Salvar</Button>
          <Button variant="outlined" onClick={() => navigate('/livros')}>Cancelar</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BookEdit;
