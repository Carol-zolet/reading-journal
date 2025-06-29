// src/pages/AddBook.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const AddBook = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    genero: "",
    dataLeitura: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Se tiver id, é edição

  // Carrega dados se estiver editando
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/books/${id}`)
        .then((response) => setFormData(response.data))
        .catch((error) => {
          setError("Erro ao buscar livro.");
          console.error(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/books`, {
          id: Number(id),
          ...formData,
        });
      } else {
        await axios.post(`http://localhost:5000/books`, formData);
      }
      navigate("/livros");
    } catch (err) {
      setError("Erro ao salvar o livro.");
      console.error(err);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        {id ? "Editar Livro" : "Cadastrar Novo Livro"}
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Título do Livro"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Autor(a)"
                  name="autor"
                  value={formData.autor}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Gênero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Data de Leitura"
                  name="dataLeitura"
                  type="date"
                  value={formData.dataLeitura}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {id ? "Salvar alterações" : "Cadastrar Livro"}
                </Button>
              </Grid>
            </Grid>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </CardContent>
        </Card>
      </form>
    </Container>
  );
};

export default AddBook;
