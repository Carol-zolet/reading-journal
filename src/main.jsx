import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import BooksList from "./pages/BooksList.jsx"
import AddBook from "./pages/AddBook.jsx"
import About from "./pages/About.jsx"
import "./index.css"

console.log("🚀 READING JOURNAL - PROJETO LIMPO E FUNCIONAL");
console.log("📅 Build:", new Date().toLocaleString());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "livros", element: <BooksList /> },
      { path: "adicionar", element: <AddBook /> },
      { path: "livros/novo", element: <AddBook /> },
      { path: "sobre", element: <About /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// Debug limpo
window.React = React;
window.AppInfo = {
  nome: "Reading Journal",
  status: "Funcionando 100%",
  rotas: ["/", "/livros", "/adicionar", "/livros/novo", "/sobre"],
  autor: "Caroline"
};

console.log("✅ App inicializado com sucesso!");
console.log("🔧 Debug:", window.AppInfo);
