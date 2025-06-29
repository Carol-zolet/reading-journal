import React from 'react'
import { render } from '@testing-library/react'
import BookForm from '../components/BookForm/BookForm'

describe('BookForm', () => {
  test('renderiza sem erros', () => {
    const mockOnSubmit = vi.fn()
    render(<BookForm onSubmit={mockOnSubmit} />)
    expect(document.body).toBeTruthy()
  })
})
