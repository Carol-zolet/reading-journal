import { http, HttpResponse } from 'msw'
const books = [
  { id: 1, titulo: '1984', autor: 'George Orwell', status: 'lido' },
  { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis', status: 'lendo' }
]
let nextId = 3
export const handlers = [
  http.get('http://localhost:5000/books', () => HttpResponse.json(books)),
  http.post('http://localhost:5000/books', async ({ request }) => {
    const newBook = await request.json()
    const book = { ...newBook, id: nextId++ }
    books.push(book)
    return HttpResponse.json(book, { status: 201 })
  }),
  http.put('http://localhost:5000/books/:id', async ({ params, request }) => {
    const updates = await request.json()
    const index = books.findIndex(b => b.id === parseInt(params.id))
    if (index === -1) return new HttpResponse(null, { status: 404 })
    books[index] = { ...books[index], ...updates }
    return HttpResponse.json(books[index])
  }),
  http.delete('http://localhost:5000/books/:id', ({ params }) => {
    const index = books.findIndex(b => b.id === parseInt(params.id))
    if (index === -1) return new HttpResponse(null, { status: 404 })
    books.splice(index, 1)
    return new HttpResponse(null, { status: 204 })
  }),
]
