import axios from 'axios';

const API_URL = 'http://localhost:5000/books';

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    throw error;
  }
};

export const createBook = async (bookData) => {
  if (!bookData.titulo || !bookData.autor) {
    throw new Error('Título e autor são obrigatórios');
  }
  try {
    const response = await axios.post(API_URL, bookData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar livro:', error);
    throw error;
  }
};

export const updateBook = async (id, bookData) => {
  if (!id) {
    throw new Error('ID do livro é obrigatório para atualização');
  }
  try {
    const dataWithId = { ...bookData, id: parseInt(id) };
    const response = await axios.put(API_URL + '/' + id, dataWithId);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  if (!id) {
    throw new Error('ID do livro é obrigatório para exclusão');
  }
  try {
    await axios.delete(API_URL + '/' + id);
    return true;
  } catch (error) {
    console.error('Erro ao deletar livro:', error);
    return false;
  }
};
