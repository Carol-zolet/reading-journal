import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert, CircularProgress, Fab, Typography, Box, Chip, Avatar, Divider, IconButton, Tooltip } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { getBooks, deleteBook } from '../services/api';
import { Edit, Delete, Add, Person, Category, CalendarToday, Star } from '@mui/icons-material';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const navigate = useNavigate();

  const loadBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      setError('Falha ao carregar os livros.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleEditClick = (id) => {
    navigate('/livros/editar/' + id);
  };

  const handleDeleteClick = (book) => {
    setBookToDelete(book);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteBook(bookToDelete.id);
      setSuccess('Livro removido com sucesso!');
      setDeleteDialogOpen(false);
      setBookToDelete(null);
      loadBooks();
    } catch (err) {
      setError('Erro ao remover livro.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Não informado';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const getInitials = (title) => {
    return title.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  };

  const getRandomColor = () => {
    const colors = ['#1976d2', '#dc004e', '#388e3c', '#f57c00', '#7b1fa2', '#00796b'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (loading) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ mt: 2 }}>Carregando biblioteca...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 4,
        p: 4,
        mb: 4,
        color: 'white',
        textAlign: 'center'
      }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Minha Biblioteca Digital
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
          Organize e acompanhe sua jornada literaria
        </Typography>
        <Button 
          component={Link} 
          to="/livros/novo" 
          variant="contained" 
          size="large"
          startIcon={<Add />}
          sx={{ 
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
          }}
        >
          Adicionar Novo Livro
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {books.length > 0 ? (
          books.map(book => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}>
                <Box sx={{ 
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  p: 2,
                  textAlign: 'center'
                }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    mx: 'auto',
                    backgroundColor: getRandomColor(),
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {getInitials(book.titulo)}
                  </Avatar>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    lineHeight: 1.3,
                    mb: 2
                  }}>
                    {book.titulo}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Person sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {book.autor}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Category sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                    <Chip 
                      label={book.genero || 'Não informado'} 
                      size="small" 
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CalendarToday sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(book.dataLeitura)}
                    </Typography>
                  </Box>

                  {book.avaliacao && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Star sx={{ fontSize: 18, mr: 1, color: '#ffc107' }} />
                      <Typography variant="body2">
                        {book.avaliacao}/5
                      </Typography>
                    </Box>
                  )}
                </CardContent>

                <Divider />
                
                <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
                  <Box>
                    <Tooltip title="Editar livro">
                      <IconButton 
                        size="medium" 
                        onClick={() => handleEditClick(book.id)}
                        sx={{ 
                          color: 'primary.main',
                          '&:hover': { backgroundColor: 'primary.light', color: 'white' }
                        }}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir livro">
                      <IconButton 
                        size="medium" 
                        onClick={() => handleDeleteClick(book)}
                        sx={{ 
                          color: 'error.main',
                          '&:hover': { backgroundColor: 'error.light', color: 'white' }
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ 
              textAlign: 'center', 
              mt: 8,
              p: 6,
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              borderRadius: 4
            }}>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                Sua biblioteca esta vazia
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Comece adicionando seu primeiro livro e construa sua biblioteca digital!
              </Typography>
              <Button 
                component={Link} 
                to="/livros/novo" 
                variant="contained" 
                startIcon={<Add />}
                size="large"
                sx={{ borderRadius: 3 }}
              >
                Adicionar Primeiro Livro
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>

      <Fab 
        component={Link} 
        to="/livros/novo" 
        color="primary" 
        aria-label="adicionar livro" 
        sx={{ 
          position: 'fixed', 
          bottom: 24, 
          right: 24,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
          }
        }}
      >
        <Add />
      </Fab>

      <Dialog 
        open={deleteDialogOpen} 
        onClose={() => setDeleteDialogOpen(false)}
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ pb: 1 }}>Confirmar Exclusao</DialogTitle>
        <DialogContent>
          <Typography>
            Tem certeza que deseja excluir <strong>"{bookToDelete?.titulo}"</strong>?
          </Typography>
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            Esta acao nao pode ser desfeita.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setDeleteDialogOpen(false)} sx={{ borderRadius: 2 }}>
            Cancelar
          </Button>
          <Button 
            onClick={handleDeleteConfirm} 
            color="error" 
            variant="contained"
            sx={{ borderRadius: 2 }}
          >
            Excluir
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={!!success} 
        autoHideDuration={6000} 
        onClose={() => setSuccess('')}
      >
        <Alert severity="success" sx={{ borderRadius: 2 }}>
          {success}
        </Alert>
      </Snackbar>

      <Snackbar 
        open={!!error} 
        autoHideDuration={6000} 
        onClose={() => setError('')}
      >
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default BooksList;
