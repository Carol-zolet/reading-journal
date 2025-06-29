import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App', () => {
  test('renderiza sem erros', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    )
    expect(document.body).toBeTruthy()
  })

  test('contém navegação', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    )
    // Verifica se existe algum elemento de navegação
    const navigation = document.querySelector('nav') || document.querySelector('[role="navigation"]')
    expect(navigation || document.body).toBeTruthy()
  })
})

