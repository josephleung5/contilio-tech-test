import { render, screen, fireEvent } from '@testing-library/react'
import Login from './Login'

describe('Login', () => {
  it('renders successfully', () => {
    render(<Login />)

    const title = screen.getByText('Welcome')
    const description = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
    const usernameInput = screen.getByLabelText('username')
    const passwordInput = screen.getByLabelText('password')
    const loginButton = screen.getByRole('button')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
    expect(loginButton).toBeDisabled()
  })

  it('enable loginButton when both usernameInput and passwordInput are not empty', () => {
    render(<Login />)
    const usernameInput = screen.getByLabelText('username')
    const passwordInput = screen.getByLabelText('password')
    const loginButton = screen.getByRole('button')

    expect(loginButton).toBeDisabled()

    fireEvent.change(usernameInput, { target: { value: 1 } })
    expect(loginButton).toBeDisabled()
    
    fireEvent.change(passwordInput, { target: { value: 1 } })
    expect(loginButton).toBeEnabled()
  })
})
