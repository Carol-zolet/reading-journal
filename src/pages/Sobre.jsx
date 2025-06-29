import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
} from "@mui/material";
import {
  MenuBook,
  Code,
  Schedule,
  TrendingUp,
  Star,
  CheckCircle,
} from "@mui/icons-material";

const SobrePage = () => {
  const tecnologias = [
    "React 18",
    "Material-UI",
    "React Router",
    "Axios",
    "Vite",
    "Vitest",
    "JavaScript ES6+",
  ];

  const funcionalidades = [
    {
      icon: <MenuBook color="primary" />,
      text: "Cadastro completo de livros com título, autor, gênero e data",
    },
    {
      icon: <CheckCircle color="success" />,
      text: "Controle de status de leitura (Lido, Lendo, Quero Ler, etc.)",
    },
    {
      icon: <Star color="warning" />,
      text: "Sistema de avaliação e comentários pessoais",
    },
    {
      icon: <TrendingUp color="info" />,
      text: "Filtros e busca avançada por título, autor ou gênero",
    },
    {
      icon: <Schedule color="secondary" />,
      text: "Histórico completo de leituras com datas",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          📚 Sobre o Reading Journal
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: "auto" }}
        >
          Uma aplicação moderna e intuitiva para organizar e acompanhar suas
          leituras
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Descrição do Projeto */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              O Projeto
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              O Reading Journal é uma aplicação web desenvolvida em React que
              permite aos usuários organizarem sua biblioteca pessoal de forma
              digital e eficiente. Com uma interface moderna e intuitiva, você
              pode cadastrar livros, acompanhar seu progresso de leitura e
              manter um histórico completo de suas experiências literárias.
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              O projeto foi desenvolvido como parte do curso de Desenvolvimento
              Frontend, aplicando as melhores práticas de desenvolvimento React,
              integração com APIs REST e implementação de testes automatizados.
            </Typography>
          </Paper>

          {/* Funcionalidades */}
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Funcionalidades
            </Typography>
            <List>
              {funcionalidades.map((item, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      "& .MuiListItemText-primary": { fontSize: "1.1rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Sidebar com informações técnicas */}
        <Grid item xs={12} md={4}>
          {/* Tecnologias */}
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Code color="primary" sx={{ mr: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Tecnologias
              </Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {tecnologias.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  variant="outlined"
                  color="primary"
                  sx={{ mb: 1 }}
                />
              ))}
            </Box>
          </Paper>

          {/* Estatísticas do Projeto */}
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Estatísticas
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">
                  Componentes React:
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  15+
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">
                  Testes Unitários:
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  17 ✅
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">
                  Cobertura de Código:
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  95%+
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  Endpoints API:
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  5
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Informações do Desenvolvedor */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                sx={{
                  backgroundColor: "primary.main",
                  mr: 2,
                  width: 56,
                  height: 56,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                C
              </Avatar>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Caroline
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Desenvolvedora Frontend
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" paragraph>
              Desenvolvido como projeto acadêmico para demonstrar conhecimentos
              em:
            </Typography>
            <List dense>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemText
                  primary="• Desenvolvimento Frontend com React"
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemText
                  primary="• Integração com APIs REST"
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemText
                  primary="• Testes automatizados"
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemText
                  primary="• UI/UX Design"
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Rodapé */}
      <Box textAlign="center" mt={6} pt={4} borderTop={1} borderColor="divider">
        <Typography variant="body2" color="text.secondary">
          © 2025 Reading Journal - Projeto Acadêmico de Desenvolvimento
          Frontend
        </Typography>
      </Box>
    </Container>
  );
};

export default SobrePage;
