// src/services/api.js - VERSÃO ÚNICA E FINAL

console.log("🚀 API Mock Loading - VERSÃO FINAL");

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
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored || stored === "null") {
      console.log("📚 Criando dados iniciais");
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
      return INITIAL_BOOKS;
    }
    
    const books = JSON.parse(stored);
    if (!Array.isArray(books) || books.length === 0) {
      console.log("📚 Restaurando dados padrão");
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
      return INITIAL_BOOKS;
    }
    
    console.log(`📚 ${books.length} livros carregados`);
    return books;
  } catch (error) {
    console.error("❌ Erro localStorage:", error);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
    return INITIAL_BOOKS;
  }
};

// Simular delay de rede
const delay = (ms = 600) => new Promise(resolve => setTimeout(resolve, ms));

// ============== API FUNCTIONS ==============

export const getBooks = async () => {
  console.log("🔍 getBooks() - MOCK VERSION");
  await delay(300);
  const books = initializeBooks();
  console.log("✅ Retornando", books.length, "livros");
  return books;
};

export const createBook = async (bookData) => {
  console.log("➕ createBook() - MOCK VERSION:", bookData);
  
  // Validação
  if (!bookData.titulo || !bookData.autor || !bookData.genero || !bookData.dataLeitura) {
    const error = new Error("Todos os campos são obrigatórios");
    console.error("❌ Validação:", error.message);
    throw error;
  }
  
  await delay(500);
  
  try {
    const books = initializeBooks();
    const newBook = {
      id: Date.now(),
      titulo: bookData.titulo.trim(),
      autor: bookData.autor.trim(),
      genero: bookData.genero.trim(),
      dataLeitura: bookData.dataLeitura
    };
    
    const updatedBooks = [...books, newBook];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
    
    console.log("✅ Livro criado - MOCK:", newBook);
    return newBook;
  } catch (error) {
    console.error("❌ Erro criar:", error);
    throw new Error("Falha ao salvar livro");
  }
};

export const updateBook = async (id, bookData) => {
  console.log("✏️ updateBook() - MOCK VERSION:", id);
  await delay(400);
  
  const books = initializeBooks();
  const updatedBooks = books.map(book => 
    book.id === parseInt(id) ? { ...book, ...bookData } : book
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  
  const updated = updatedBooks.find(book => book.id === parseInt(id));
  console.log("✅ Livro atualizado - MOCK:", updated);
  return updated;
};

export const deleteBook = async (id) => {
  console.log("🗑️ deleteBook() - MOCK VERSION:", id);
  await delay(300);
  
  const books = initializeBooks();
  const filteredBooks = books.filter(book => book.id !== parseInt(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredBooks));
  
  console.log("✅ Livro deletado - MOCK");
  return { success: true };
};

// Debug global
if (typeof window !== 'undefined') {
  window.debugAPI = {
    getBooks: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    clearBooks: () => localStorage.removeItem(STORAGE_KEY),
    resetBooks: () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
      console.log("🔄 Reset completo");
      window.location.reload();
    },
    version: "FINAL_MOCK_ONLY"
  };
  console.log("🔧 Debug: window.debugAPI disponível");
}

// Inicializar
console.log("🚀 API Mock FINAL inicializada");
console.log("🌍 Ambiente:", typeof window !== 'undefined' && window.location.hostname);
initializeBooks();

// NUNCA usar axios ou fetch para localhost
console.log("⚠️ ATENÇÃO: Esta versão NUNCA faz requisições HTTP");
