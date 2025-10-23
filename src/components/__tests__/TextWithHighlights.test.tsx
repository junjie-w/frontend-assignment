import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextWithHighlights } from '../TextWithHighlights'

describe('TextWithHighlights', () => {
  test('renders text without highlight when query is empty', () => {
    render(<TextWithHighlights text="Hello World" query="" />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
    expect(screen.queryByText('', { selector: '.uniwise-highlight' })).not.toBeInTheDocument()
  })

  test('highlights matching text when query is found', () => {
    const { container } = render(<TextWithHighlights text="Hello World" query="World" />)
    
    const highlightElement = screen.getByText('World', { selector: '.uniwise-highlight' })
    expect(highlightElement).toBeInTheDocument()
    expect(container.textContent).toBe('Hello World')
  })

  test('highlights are case insensitive', () => {
    const { container } = render(<TextWithHighlights text="Hello World" query="world" />)
    
    const highlightElement = screen.getByText('World', { selector: '.uniwise-highlight' })
    expect(highlightElement).toBeInTheDocument()
    expect(container.textContent).toBe('Hello World')
  })
})
