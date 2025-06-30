// src/services/api.js - VERSÃO FINAL SEM AXIOS

console.log("🚀 API Mock Loading - Pure localStorage version");

const STORAGE_KEY = "reading_journal_books";

const INITIAL_BOOKS = [
  {
    id: 1,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficção Científica", 
    dataLeitura: "2024-01-15"
  },
  {
    id: 2,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: "Literatura Brasileira",
    dataLeitura: "2024-02-10"
  },
  {
    id: 3,
    titulo: "O Senhor dos Anéis", 
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    dataLeitura: "2024-03-05"
  },
  {
    id: 4,
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    genero: "Tecnologia",
    dataLeitura: "2024-11-20"
  }
];

// Função para inicializar dados
const initializeBooks = () => {
  try {
    let stored = localStorage.getItem(STORAGE_KEY);
    
    if (!stored || stored === "null" || stored === "undefined") {
      console.log("📚 Primeiro acesso - criando dados iniciais");
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
      return INITIAL_BOOKS;
    }
    
    const books = JSON.parse(stored);
    
    if (!Array.isArray(books) || books.length === 0) {
      console.log("📚 Array vazio - restaurando dados padrão");
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
      return INITIAL_BOOKS;
    }
    
    console.log(`📚 ${books.length} livros carregados do localStorage`);
    return books;
    
  } catch (error) {
    console.error("❌ Erro no localStorage:", error);
    console.log("🔄 Restaurando dados padrão...");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
    return INITIAL_BOOKS;
  }
};

// Delay para simular API real
const delay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

// =============== API FUNCTIONS ===============

export const getBooks = async () => {
  console.log("🔍 getBooks() - Buscando livros...");
  await delay(500);
  
  const books = initializeBooks();
  console.log("✅ getBooks() - Retornando:", books.length, "livros");
  return books;
};

export const createBook = async (bookData) => {
  console.log("➕ createBook() - Dados recebidos:", bookData);
  
  // Validação rigorosa
  const requiredFields = ['titulo', 'autor', 'genero', 'dataLeitura'];
  const missingFields = requiredFields.filter(field => !bookData[field] || bookData[field].trim() === '');
  
  if (missingFields.length > 0) {
    const error = new Error(`Campos obrigatórios: ${missingFields.join(', ')}`);
    console.error("❌ Validação falhou:", error.message);
    throw error;
  }
  
  await delay(800);
  
  try {
    const books = initializeBooks();
    
    // Criar novo livro com ID único
    const newBook = {
      id: Date.now(), // ID único baseado em timestamp
      titulo: bookData.titulo.trim(),
      autor: bookData.autor.trim(),
      genero: bookData.genero.trim(),
      dataLeitura: bookData.dataLeitura
    };
    
    const updatedBooks = [...books, newBook];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
    
    console.log("✅ createBook() - Livro criado:", newBook);
    return newBook;
    
  } catch (error) {
    console.error("❌ Erro ao criar livro:", error);
    throw new Error("Falha ao salvar livro. Tente novamente.");
  }
};

export const updateBook = async (id, bookData) => {
  console.log("✏️ updateBook() - ID:", id, "Dados:", bookData);
  await delay(600);
  
  try {
    const books = initializeBooks();
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    
    if (bookIndex === -1) {
      throw new Error("Livro não encontrado");
    }
    
    const updatedBook = {
      ...books[bookIndex],
      ...bookData,
      id: parseInt(id) // Manter ID original
    };
    
    books[bookIndex] = updatedBook;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    
    console.log("✅ updateBook() - Livro atualizado:", updatedBook);
    return updatedBook;
    
  } catch (error) {
    console.error("❌ Erro ao atualizar livro:", error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  console.log("🗑️ deleteBook() - ID:", id);
  await delay(400);
  
  try {
    const books = initializeBooks();
    const filteredBooks = books.filter(book => book.id !== parseInt(id));
    
    if (filteredBooks.length === books.length) {
      throw new Error("Livro não encontrado");
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredBooks));
    
    console.log("✅ deleteBook() - Livro removido com sucesso");
    return { success: true, message: "Livro removido com sucesso" };
    
  } catch (error) {
    console.error("❌ Erro ao deletar livro:", error);
    throw error;
  }
};

// Inicializar ao carregar módulo
console.log("🚀 API Mock inicializada - Modo: Pure localStorage");
console.log("🌍 Ambiente:", window.location.hostname === 'localhost' ? 'Desenvolvimento' : 'Produção');
initializeBooks();

// Debug helper
window.debugReadingJournal = {
  getBooks: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  clearBooks: () => localStorage.removeItem(STORAGE_KEY),
  resetBooks: () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
    console.log("🔄 Dados resetados");
  }
};

console.log("🔧 Debug disponível: window.debugReadingJournal");
