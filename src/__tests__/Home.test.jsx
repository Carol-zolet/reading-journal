import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home'

describe('Home', () => {
  test('renderiza sem erros', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Home />
      </MemoryRouter>
    )
    expect(document.body).toBeTruthy()
  })

  test('contém conteúdo da home', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Home />
      </MemoryRouter>
    )
    // Verifica se a página renderizou
    expect(document.body.textContent.length).toBeGreaterThan(0)
  })
})

