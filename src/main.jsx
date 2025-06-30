import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home.jsx"
import BooksList from "./pages/BooksList.jsx"
import AddBook from "./pages/AddBook.jsx"
import About from "./pages/About.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "sobre",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
