// src/services/api-mock.js
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

// Inicializar com dados se localStorage vazio
const initializeBooks = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored || JSON.parse(stored).length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKS));
    return INITIAL_BOOKS;
  }
  return JSON.parse(stored);
};

// API Mock
export const getBooks = async () => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simular delay
  return initializeBooks();
};

export const createBook = async (bookData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const books = initializeBooks();
  const newBook = {
    ...bookData,
    id: Math.max(...books.map(b => b.id), 0) + 1
  };
  const updatedBooks = [...books, newBook];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  return newBook;
};

export const updateBook = async (id, bookData) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const books = initializeBooks();
  const updatedBooks = books.map(book => 
    book.id === parseInt(id) ? { ...book, ...bookData } : book
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  return updatedBooks.find(book => book.id === parseInt(id));
};

export const deleteBook = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const books = initializeBooks();
  const updatedBooks = books.filter(book => book.id !== parseInt(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  return { success: true };
};
