// src/services/api.js
import axios from "axios";

// Detectar se estamos em produção (Vercel) ou desenvolvimento
const isProduction = window.location.hostname !== "localhost";

// Se estiver em produção, usar API mock
if (isProduction) {
  console.log("🌐 Usando API Mock para produção");
  
  // Importar funções mock
  export { getBooks, createBook, updateBook, deleteBook } from "./api-mock.js";
  
} else {
  console.log("🔧 Usando API local para desenvolvimento");
  
  // API original para desenvolvimento
  const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
  });

  export const getBooks = async () => {
    try {
      const response = await api.get("/books");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      throw error;
    }
  };

  export const createBook = async (bookData) => {
    try {
      const response = await api.post("/books", bookData);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      throw error;
    }
  };

  export const updateBook = async (id, bookData) => {
    try {
      const response = await api.put(`/books/${id}`, bookData);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
      throw error;
    }
  };

  export const deleteBook = async (id) => {
    try {
      const response = await api.delete(`/books/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
      throw error;
    }
  };
}
