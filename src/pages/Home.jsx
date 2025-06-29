import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  MenuBook,
  AutoStories,
  Add,
  TrendingUp,
  Favorite,
  Star,
} from "@mui/icons-material";

const Home = () => {
  const handleImportarExemplo = (livros) => {
    // Aqui você pode integrar com sua API ou estado global
    console.log('Importando livros:', livros);
    alert('Funcionalidade de exemplo! Integre com sua API para salvar os livros.');
  };

  const features = [
    {
      icon: <Add sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Cadastre seus livros",
      description:
        "Adicione facilmente os livros que você leu com todas as informações importantes",
      action: "Começar",
      link: "/livros/novo",
    },
    {
      icon: <MenuBook sx={{ fontSize: 40, color: "#2e7d32" }} />,
      title: "Organize sua biblioteca",
      description:
        "Visualize, edite e organize todos os seus livros em um só lugar",
      action: "Ver livros",
      link: "/livros",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#ed6c02" }} />,
      title: "Acompanhe seu progresso",
      description:
        "Veja estatísticas da sua jornada de leitura e descubra seus gêneros favoritos",
      action: "Saber mais",
      link: "/sobre",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          p: 6,
          mb: 6,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <AutoStories sx={{ fontSize: 80, opacity: 0.9 }} />
        </Box>

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Bem-vindo ao Reading Journal
        </Typography>

        <Typography
          variant="h5"
          sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: "auto" }}
        >
          Sua jornada literária começa aqui. Organize, acompanhe e celebre cada
          livro que transformou seu mundo.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            to="/livros/novo"
            variant="contained"
            size="large"
            startIcon={<Add />}
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.3)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease-in-out",
              px: 4,
              py: 1.5,
            }}
          >
            Adicionar Primeiro Livro
          </Button>

          <Button
            component={Link}
            to="/livros"
            variant="outlined"
            size="large"
            startIcon={<MenuBook />}
            sx={{
              borderColor: "rgba(255,255,255,0.5)",
              color: "white",
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease-in-out",
              px: 4,
              py: 1.5,
            }}
          >
            Ver Minha Biblioteca
          </Button>
        </Box>
      </Paper>

      {/* Features Section */}
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 5, fontWeight: "bold" }}
      >
        Descubra o poder da leitura organizada
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
                <Box sx={{ mb: 3 }}>{feature.icon}</Box>

                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {feature.title}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {feature.description}
                </Typography>

                <Button
                  component={Link}
                  to={feature.link}
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    transition: "transform 0.2s ease-in-out",
                  }}
                >
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Stats Section */}
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 4,
          background: "linear-gradient(45deg, #f5f5f5 30%, #e8f5e8 90%)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
          Sua jornada literária
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Chip
            icon={<Favorite />}
            label="Livros que mudaram sua vida"
            variant="outlined"
            size="large"
            sx={{ fontSize: "1.1rem", py: 3, px: 2 }}
          />
          <Chip
            icon={<Star />}
            label="Descobertas incríveis"
            variant="outlined"
            size="large"
            sx={{ fontSize: "1.1rem", py: 3, px: 2 }}
          />
          <Chip
            icon={<TrendingUp />}
            label="Crescimento contínuo"
            variant="outlined"
            size="large"
            sx={{ fontSize: "1.1rem", py: 3, px: 2 }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;

