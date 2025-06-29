// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

const books = [
  { id: 1, titulo: "1984", autor: "George Orwell" },
  { id: 2, titulo: "O Sol é Para Todos", autor: "Harper Lee" },
];

export const handlers = [
  // Mock para obter todos os livros
  http.get("http://localhost:5000/books", () => {
    return HttpResponse.json(books);
  }),

  // Mock para obter um livro por ID
  http.get("http://localhost:5000/books/:id", ({ params }) => {
    const book = books.find((b) => b.id === Number(params.id));
    return book
      ? HttpResponse.json(book)
      : new HttpResponse(null, { status: 404 });
  }),

  // Mock para criar um novo livro
  http.post("http://localhost:5000/books", () => {
    return HttpResponse.json(
      { id: 99, titulo: "Livro Mockado" },
      { status: 201 },
    );
  }),

  // Mock para atualizar um livro
  http.put("http://localhost:5000/books/:id", () => {
    return new HttpResponse(null, { status: 200 });
  }),

  // Mock para deletar um livro
  http.delete("http://localhost:5000/books/:id", () => {
    return new HttpResponse(null, { status: 204 });
  }),
];
