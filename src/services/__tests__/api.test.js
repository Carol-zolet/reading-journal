import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { getBooks, createBook, updateBook, deleteBook } from '../api'

vi.mock('axios')

describe('API Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('getBooks deve retornar lista de livros', async () => {
    const mockBooks = [{ id: 1, titulo: 'Teste' }]
    axios.get.mockResolvedValue({ data: mockBooks })
    
    const result = await getBooks()
    expect(result).toEqual(mockBooks)
  })

  it('createBook deve criar novo livro', async () => {
    const newBook = { titulo: 'Novo', autor: 'Autor' }
    const createdBook = { id: 1, ...newBook }
    axios.post.mockResolvedValue({ data: createdBook })
    
    const result = await createBook(newBook)
    expect(result).toEqual(createdBook)
  })

  it('updateBook deve atualizar livro existente', async () => {
    const updatedBook = { id: 1, titulo: 'Atualizado' }
    axios.put.mockResolvedValue({ data: updatedBook })
    
    const result = await updateBook(1, updatedBook)
    expect(result).toEqual(updatedBook)
  })

  it('deleteBook deve funcionar corretamente', async () => {
    axios.delete.mockResolvedValue({ data: {} })
    
    const result = await deleteBook(1)
    // deleteBook retorna boolean (true quando sucesso)
    expect(typeof result).toBe('boolean')
    expect(axios.delete).toHaveBeenCalledWith('http://localhost:5000/books/1')
  })

  it('getBooks deve lançar um erro em caso de falha de rede', async () => {
    axios.get.mockRejectedValue(new Error('Erro de rede'))
    
    await expect(getBooks()).rejects.toThrow()
  })
})
