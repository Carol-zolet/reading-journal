import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress
} from '@mui/material';
import { createBook } from '../services/api';

export default function AddBook() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    genero: '',
    dataLeitura: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpar erro quando user digita
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📝 Formulário submetido:", formData);
    
    // Validação básica
    if (!formData.titulo.trim() || !formData.autor.trim() || !formData.genero.trim() || !formData.dataLeitura) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log("🚀 Chamando createBook...");
      const newBook = await createBook(formData);
      console.log("✅ Livro criado com sucesso:", newBook);
      
      // Redirecionar para lista
      navigate('/livros');
    } catch (err) {
      console.error("❌ Erro no cadastro:", err);
      setError(err.message || 'Erro ao cadastrar livro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          📚 Adicionar Novo Livro
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Preencha os dados do livro para adicionar à sua biblioteca
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Título do Livro"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            margin="normal"
            required
            disabled={loading}
            placeholder="Ex: O Senhor dos Anéis"
          />

          <TextField
            fullWidth
            label="Autor(a)"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            margin="normal"
            required
            disabled={loading}
            placeholder="Ex: J.R.R. Tolkien"
          />

          <TextField
            fullWidth
            label="Gênero"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            margin="normal"
            required
            disabled={loading}
            placeholder="Ex: Fantasia"
          />

          <TextField
            fullWidth
            label="Data de Leitura"
            name="dataLeitura"
            type="date"
            value={formData.dataLeitura}
            onChange={handleChange}
            margin="normal"
            required
            disabled={loading}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/livros')}
              disabled={loading}
              size="large"
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              size="large"
              sx={{ minWidth: 120 }}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  Salvando...
                </>
              ) : (
                '💾 Salvar Livro'
              )}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
