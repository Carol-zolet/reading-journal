// src/services/bookService.js
import axios from "axios";

const API_URL = "http://localhost:5000/books"; // URL da sua API backend

export const getAllBooks = () => {
  console.log(`SERVICE: Fazendo GET para: ${API_URL}`);
  return axios.get(API_URL);
};

export const getBookById = (id) => {
  console.log(`SERVICE: Fazendo GET para: ${API_URL}/${id}`);
  return axios.get(`${API_URL}/${id}`);
};

export const createBook = (bookData) => {
  console.log(`SERVICE: Fazendo POST para: ${API_URL} com dados:`, bookData);
  return axios.post(API_URL, bookData);
};

export const updateBook = (id, bookData) => {
  console.log(
    `SERVICE: Fazendo PUT para: ${API_URL}/${id} com dados:`,
    bookData,
  );
  return axios.put(`${API_URL}/${id}`, bookData);
};

export const deleteBook = (id) => {
  console.log(`SERVICE: Fazendo DELETE para: ${API_URL}/${id}`);
  return axios.delete(`${API_URL}/${id}`);
};
