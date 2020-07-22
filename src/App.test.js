import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

test('renders Kybing Website', () => {
  const { getByText } = render(<App />)
  const element = getByText(/Board of Directors/i)
  expect(element).toBeInTheDocument()
})
