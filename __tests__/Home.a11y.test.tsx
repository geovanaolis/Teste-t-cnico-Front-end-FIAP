import React from 'react'
import { render } from '@testing-library/react'
import Home from '../src/pages/index'
import { axe } from 'jest-axe'

describe('Accessibility checks', () => {
  it('Home has no basic accessibility violations', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
