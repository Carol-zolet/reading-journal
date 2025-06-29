import React from 'react';
import { Container, Typography, Box, Paper, Grid, Chip, Stack, Avatar, Card, CardContent } from '@mui/material';
import { 
  MenuBook, 
  Code, 
  School, 
  Favorite,
  Language,
  Storage,
  Palette,
  BugReport,
  Speed,
  Security
} from '@mui/icons-material';

const About = () => {
  const technologies = [
    { name: 'React 18', icon: <Code />, description: 'Biblioteca para construcao de interfaces', color: '#61dafb' },
    { name: 'Material-UI', icon: <Palette />, description: 'Biblioteca de componentes UI', color: '#0081cb' },
    { name: 'React Router', icon: <Language />, description: 'Navegacao entre paginas', color: '#ca4245' },
    { name: 'Axios', icon: <Storage />, description: 'Cliente HTTP para API', color: '#5a29e4' },
    { name: 'Vite', icon: <Speed />, description: 'Build tool moderna', color: '#646cff' },
    { name: 'Vitest', icon: <BugReport />, description: 'Framework de testes', color: '#729b1b' }
  ];

  const features = [
    { title: 'Gerenciamento Completo', desc: 'Cadastre, edite e remova livros da sua biblioteca', icon: <MenuBook /> },
    { title: 'Interface Moderna', desc: 'Design responsivo e intuitivo com Material-UI', icon: <Palette /> },
    { title: 'Sincronizacao Real', desc: 'Dados sempre atualizados atraves da API REST', icon: <Security /> },
    { title: 'Multiplataforma', desc: 'Acesse de qualquer dispositivo', icon: <Language /> }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 4,
        p: 6,
        mb: 6,
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Avatar sx={{ 
            width: 100, 
            height: 100, 
            mx: 'auto', 
            mb: 3,
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <MenuBook sx={{ fontSize: 60 }} />
          </Avatar>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Reading Journal
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Sistema completo de gerenciamento de biblioteca pessoal desenvolvido com React
          </Typography>
        </Box>
        <Box sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          zIndex: 0
        }} />
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            height: '100%',
            borderRadius: 3,
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Favorite sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                  Nossa Missao
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                O Reading Journal foi criado para ajudar amantes de livros a organizar e acompanhar 
                sua jornada literaria de forma simples e eficiente.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                Nossa missao e proporcionar uma experiencia intuitiva e moderna para o gerenciamento 
                de bibliotecas pessoais, permitindo que voce mantenha o controle total dos livros.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Acreditamos que cada livro lido e uma conquista que merece ser celebrada!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <MenuBook sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Funcionalidades
              </Typography>
            </Box>
            <Stack spacing={3}>
              {features.map((feature, index) => (
                <Box key={index} sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'action.hover',
                  transition: 'all 0.3s ease',
                  '&:hover': { backgroundColor: 'primary.light', color: 'white' }
                }}>
                  <Box sx={{ color: 'primary.main', mr: 2, mt: 0.5 }}>
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {feature.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center' }}>
              <Code sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Tecnologias Utilizadas
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {technologies.map((tech, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ 
                    height: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Avatar sx={{ 
                        width: 60, 
                        height: 60, 
                        mx: 'auto', 
                        mb: 2,
                        backgroundColor: tech.color
                      }}>
                        {tech.icon}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {tech.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {tech.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white'
          }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <School sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Sobre o Desenvolvimento
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, maxWidth: 800, mx: 'auto' }}>
                Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Frontend 
                da PUCRS, aplicando as melhores praticas de desenvolvimento web moderno.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ 
                flexWrap: 'wrap', 
                gap: 1, 
                justifyContent: 'center',
                mt: 3
              }}>
                <Chip label="Componentizacao" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="Responsividade" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="Testes Automatizados" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="API Integration" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="Clean Code" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body1" color="text.secondary">
              Desenvolvido com muito carinho por <strong>Caroline</strong> - PUCRS - 2025
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
