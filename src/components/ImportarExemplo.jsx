import React from 'react';
import { Button, Alert, Box, Typography, Paper } from '@mui/material';
import { Upload, LibraryBooks, AutoStories } from '@mui/icons-material';

const ImportarExemplo = ({ onImportar }) => {
  const exemploLivros = [
    {
      "id": 4,
      "titulo": "É Assim que Acaba",
      "autor": "Colleen Hoover",
      "genero": "Romance",
      "status": "Lido",
      "avaliacao": 4.5,
      "totalPaginas": 384,
      "anoPublicacao": 2016,
      "favorito": true,
      "notas": "Uma história emocionante sobre relacionamentos tóxicos e superação.",
      "dataLeitura": "2023-09-15"
    },
    {
      "id": 5,
      "titulo": "A Biblioteca da Meia-Noite",
      "autor": "Matt Haig",
      "genero": "Fantasia",
      "status": "Lido",
      "avaliacao": 4.5,
      "totalPaginas": 288,
      "anoPublicacao": 2020,
      "favorito": true,
      "notas": "Filosofia de vida linda. Me fez refletir sobre as escolhas que fazemos.",
      "dataLeitura": "2023-04-22"
    },
    {
      "id": 6,
      "titulo": "Dom Casmurro",
      "autor": "Machado de Assis",
      "genero": "Literatura Clássica",
      "status": "Lido",
      "avaliacao": 5.0,
      "totalPaginas": 256,
      "anoPublicacao": 1899,
      "favorito": true,
      "notas": "Clássico atemporal. A maestria de Machado de Assis é impressionante.",
      "dataLeitura": "2023-12-05"
    },
    {
      "id": 7,
      "titulo": "Lições de Química",
      "autor": "Bonnie Garmus",
      "genero": "Ficção Histórica",
      "status": "Lido",
      "avaliacao": 5.0,
      "totalPaginas": 393,
      "anoPublicacao": 2022,
      "favorito": true,
      "notas": "Absolutamente incrível! Protagonista feminista forte.",
      "dataLeitura": "2023-06-25"
    },
    {
      "id": 8,
      "titulo": "Admirável Mundo Novo",
      "autor": "Aldous Huxley",
      "genero": "Ficção Científica",
      "status": "Lendo",
      "totalPaginas": 311,
      "paginaAtual": 125,
      "anoPublicacao": 1932,
      "favorito": false,
      "notas": "Distopia clássica. Muito relevante para os tempos atuais.",
      "dataAdicao": "2024-03-01"
    },
    {
      "id": 9,
      "titulo": "Duna",
      "autor": "Frank Herbert",
      "genero": "Ficção Científica",
      "status": "Quero Ler",
      "totalPaginas": 688,
      "anoPublicacao": 1965,
      "favorito": false,
      "notas": "Clássico da ficção científica que quero ler há tempos.",
      "dataAdicao": "2024-03-10"
    }
  ];

  const handleImportarExemplo = () => {
    if (onImportar) {
      onImportar(exemploLivros);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 4, textAlign: 'center', mb: 4 }}>
      <LibraryBooks sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Quer ver como fica com alguns livros?
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Importe nossa coleção de exemplo com 6 livros populares
      </Typography>
      
      <Box sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Inclusos:</strong> É Assim que Acaba, A Biblioteca da Meia-Noite, 
          Dom Casmurro, Lições de Química, Admirável Mundo Novo e Duna
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={handleImportarExemplo}
        startIcon={<Upload />}
        size="large"
        sx={{ 
          mt: 2,
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)'
        }}
      >
        Importar Livros de Exemplo
      </Button>
      
      <Alert severity="info" sx={{ mt: 3, textAlign: 'left' }}>
        <Typography variant="body2">
          <AutoStories sx={{ verticalAlign: 'middle', mr: 1 }} />
          Esta coleção inclui diferentes gêneros, status de leitura, 
          avaliações e notas para testar todas as funcionalidades da biblioteca.
        </Typography>
      </Alert>
    </Paper>
  );
};

export default ImportarExemplo;
