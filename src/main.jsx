import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import BooksList from "./pages/BooksList.jsx"
import AddBook from "./pages/AddBook.jsx"
import About from "./pages/About.jsx"
import "./index.css"

// Router com TODAS as rotas possíveis
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Erro de navegação - <a href="/">Voltar ao início</a></div>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "livros",
        element: <BooksList />
      },
      {
        path: "adicionar",
        element: <AddBook />
      },
      {
        path: "livros/novo",  // <- ROTA QUE ESTAVA FALTANDO!
        element: <AddBook />
      },
      {
        path: "sobre",
        element: <About />
      }
    ]
  }
])

// Debug
console.log("🚀 Router configurado com rotas:", ["/", "/livros", "/adicionar", "/livros/novo", "/sobre"]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// Disponibilizar React globalmente para debug
window.React = React;
console.log("✅ React disponível globalmente");
