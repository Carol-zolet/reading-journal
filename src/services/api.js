// src/services/api.js

// Dados mock sempre disponíveis
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

const STORAGE_KEY = "reading_journal_books";

// Inicializar dados se não existirem
const initializeBooks = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
    return INITIAL_BOOKS;
  }
  try {
    const books = JSON.parse(stored);
    return books.length > 0 ? books : INITIAL_BOOKS;
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
    return INITIAL_BOOKS;
  }
};

// Delay para simular rede
const delay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

// API Functions
export const getBooks = async () => {
  console.log("🔍 getBooks chamada");
  await delay();
  const books = initializeBooks();
  console.log("📚 Livros retornados:", books);
  return books;
};

export const createBook = async (bookData) => {
  console.log("➕ Criando livro:", bookData);
  await delay();
  const books = initializeBooks();
  const newBook = {
    ...bookData,
    id: Math.max(...books.map(b => b.id), 0) + 1
  };
  const updatedBooks = [...books, newBook];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  console.log("✅ Livro criado:", newBook);
  return newBook;
};

export const updateBook = async (id, bookData) => {
  console.log("✏️ Atualizando livro:", id, bookData);
  await delay();
  const books = initializeBooks();
  const updatedBooks = books.map(book => 
    book.id === parseInt(id) ? { ...book, ...bookData } : book
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  const updated = updatedBooks.find(book => book.id === parseInt(id));
  console.log("✅ Livro atualizado:", updated);
  return updated;
};

export const deleteBook = async (id) => {
  console.log("🗑️ Deletando livro:", id);
  await delay();
  const books = initializeBooks();
  const updatedBooks = books.filter(book => book.id !== parseInt(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  console.log("✅ Livro deletado");
  return { success: true };
};

// Inicializar dados ao importar
console.log("🚀 API Mock inicializada");
initializeBooks();
