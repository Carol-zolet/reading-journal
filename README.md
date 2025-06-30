reading-journal/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Layout/
│   │       └── Header.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── BooksList.jsx
│   │   ├── AddBook.jsx
│   │   └── BookEdit.jsx
│   ├── services/
│   │   └── api.js
│   ├── tests/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── screenshots/
├── package.json
├── vite.config.js
└── README.md

## Descricao dos Componentes

### Arquivos Principais

**main.jsx**
- Ponto de entrada da aplicacao
- Configura o sistema de rotas com createBrowserRouter
- Define todas as rotas: Home (/), Livros (/livros), Cadastrar (/livros/novo), Editar (/livros/editar/:id), Sobre (/sobre)

**App.jsx**
- Componente de layout principal
- Renderiza Header comum a todas as paginas
- Utiliza Outlet para exibir conteudo da rota ativa
- Configuracao do tema Material-UI

### Componentes de Layout

**Header.jsx**
- Barra de navegacao superior
- Titulo "Reading Journal" e menu de navegacao
- Links para Home, Livros e Sobre usando React Router

### Paginas da Aplicacao

**Home.jsx**
- Pagina inicial de boas-vindas
- Apresentacao do sistema
- Nao conecta com API (pagina estatica)

**About.jsx**
- Pagina informativa sobre o projeto
- Detalhes sobre tecnologias utilizadas
- Nao conecta com API (pagina estatica)

**BooksList.jsx**
- **Pagina principal da aplicacao**
- **Conexao com API**: 
  - getBooks() (GET) - Carrega lista de livros ao inicializar
  - deleteBook(id) (DELETE) - Remove livro com confirmacao
- **Funcionalidades**:
  - Exibe livros em cards responsivos
  - Botoes de editar e excluir para cada livro
  - Botao flutuante para adicionar novo livro
  - Estados de loading e feedback de erro/sucesso

**AddBook.jsx**
- **Formulario de cadastro de novos livros**
- **Conexao com API**:
  - createBook(bookData) (POST) - Cadastra novo livro
- **Campos obrigatorios**: Titulo, Autor, Genero, Data de Leitura
- **Funcionalidades**:
  - Validacao de campos obrigatorios
  - Redirecionamento automatico apos sucesso
  - Tratamento de erros

**BookEdit.jsx**
- **Formulario de edicao de livros existentes**
- **Conexao com API**:
  - getBooks() (GET) - Busca dados do livro para edicao
  - updateBook(id, bookData) (PUT) - Atualiza livro
- **Funcionalidades**:
  - Carrega dados existentes do livro
  - Permite edicao de todos os campos
  - Redirecionamento apos atualizacao

### Servicos

**api.js**
- **Camada de comunicacao com a API**
- **Configuracao**: Axios configurado para http://localhost:5000
- **Funcoes exportadas**:
  - getBooks() - Lista todos os livros
  - createBook(bookData) - Cria novo livro
  - updateBook(id, bookData) - Atualiza livro existente
  - deleteBook(id) - Remove livro
- **Tratamento de erros**: Console.error para debugging

## Como Executar o Projeto

### Pre-requisitos
- Node.js (versao 16 ou superior)
- npm (vem com Node.js)

### Passo 1: Configurar e Executar a API

```bash
# Clone o repositorio da API
git clone https://github.com/adsPucrsOnline/DesenvolvimentoFrontend.git

# Entre na pasta da API
cd DesenvolvimentoFrontend/readingJournal-api/

# Instale as dependencias
npm install

# Inicie a API
npm start
A API estara disponivel em: http://localhost:5000
Passo 2: Executar o Frontend
bash# Extraia o projeto e entre na pasta
cd reading-journal

# Instale as dependencias
npm install

# Inicie o servidor de desenvolvimento
npm run dev
A aplicacao estara disponivel em: http://localhost:5173
Passo 3: Usar a Aplicacao

Acesse http://localhost:5173 no navegador
Navegue entre as paginas usando o menu superior
Cadastre livros clicando em "Livros" e depois "Adicionar Livro"
Gerencie sua biblioteca editando e excluindo livros conforme necessario

Executar Testes
bash# Executar todos os testes
npm run test

# Executar testes uma vez (para CI)
npm run test:run

# Executar testes com cobertura
npm run test:coverage

# Executar testes com interface grafica
npm run test:ui
Status dos Testes: 32/32 testes passando
Integracao com API
Configuracao da API
A aplicacao consome a API readingJournal-api que deve estar rodando em http://localhost:5000
Endpoints Utilizados
MetodoEndpointDescricaoUsado emGET/booksLista todos os livrosBooksList.jsx, BookEdit.jsxPOST/booksCadastra novo livroAddBook.jsxPUT/books/:idAtualiza livro existenteBookEdit.jsxDELETE/books/:idRemove livroBooksList.jsx
Fluxo de Dados

Listagem: BooksList carrega dados via GET /books
Cadastro: AddBook envia dados via POST /books
Edicao: BookEdit busca dados via GET, atualiza via PUT
Exclusao: BooksList remove via DELETE /books/:id

Estrutura de Dados
Modelo de Livro
json{
  "id": "number",
  "titulo": "string (obrigatorio)",
  "autor": "string (obrigatorio)", 
  "genero": "string (obrigatorio)",
  "dataLeitura": "string (obrigatorio, formato YYYY-MM-DD)"
}
Funcionalidades por Pagina
Home

Pagina de boas-vindas
Navegacao para outras secoes
Design acolhedor e informativo

Lista de Livros

Visualizacao em cards responsivos
Informacoes: Titulo, Autor, Genero, Data de Leitura
Botoes de acao: Editar e Excluir
Botao flutuante para adicionar livro
Estados de loading e feedback

Cadastrar Livro

Formulario com campos obrigatorios
Validacao em tempo real
Redirecionamento automatico apos sucesso
Tratamento de erros

Editar Livro

Carregamento automatico dos dados existentes
Mesma interface do cadastro
Atualizacao via API
Navegacao de volta para lista

Sobre

Informacoes sobre o projeto
Tecnologias utilizadas
Detalhes de desenvolvimento

Design e Estilizacao

Tema: Material Design com gradientes modernos
Responsividade: Layout adaptavel para todos os dispositivos
Componentes: Cards, botoes, formularios e navegacao estilizados
Feedback Visual: Loading, sucessos, erros e confirmacoes
UX: Interface intuitiva e moderna com efeitos visuais

Checklist de Entrega
Requisitos Obrigatorios Atendidos

✅ Interface React com componentes reutilizaveis
✅ React Router para navegacao entre paginas
✅ Material-UI para estilizacao e componentizacao
✅ Integracao completa com API REST fornecida
✅ Axios para todas as requisicoes HTTP
✅ CRUD completo (Create, Read, Update, Delete)
✅ Testes unitarios implementados

Paginas Implementadas

✅ Home - Pagina inicial de boas-vindas
✅ Sobre - Pagina informativa do projeto
✅ Cadastrar - Formulario para novos livros
✅ Lista de Livros - Listagem com edicao e exclusao

Campos Obrigatorios no Formulario

✅ Titulo
✅ Autor(a)
✅ Genero
✅ Data de leitura

Scripts Disponiveis
bash# Desenvolvimento
npm run dev          # Executa em modo desenvolvimento
npm run build        # Gera build de producao
npm run preview      # Visualiza o build de producao

# Testes
npm run test         # Executa testes em modo watch
npm run test:run     # Executa testes uma vez
npm run test:ui      # Interface grafica dos testes
npm run test:coverage # Relatorio de cobertura

# Qualidade de codigo
npm run lint         # Executa verificacao de codigo
Status do Projeto
🎉 PROJETO COMPLETO E FUNCIONAL

Frontend: Totalmente implementado e testado
API Integration: Todos os endpoints funcionando
Testes: 32/32 testes passando
Design: Interface profissional e responsiva
Documentacao: README completo e detalhado

Demonstracoes Incluidas

✅ 4 Screenshots das principais telas
✅ Codigo fonte completo
✅ Configuracoes de build e testes
✅ Documentacao tecnica detalhada


Desenvolvido por Caroline para a disciplina de Desenvolvimento Frontend - PUCRS# Reading Journal - Sistema de Biblioteca Digital

✅ Versão atualizada - Timestamp: 2024-12-21 16:30
