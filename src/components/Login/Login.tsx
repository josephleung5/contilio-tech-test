import React from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import './Login.scss'

type LoginStates = {
  username: string
  password: string
}

class Login extends React.Component<{},LoginStates> {
  state: LoginStates = {
    username: '',
    password: ''
  }

  isLoginEnabled(): boolean | undefined {
    return !(this.state.username.length > 0 && this.state.password.length > 0)
  }

  render() {
    return (
      <Container className="login-container">
        <Row>
          <Col className="form-col">
            <h1>Welcome</h1>
          </Col>
          <Col className="form-col">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          </Col>
          <Col className="form-col">
            <Form.Label>
              Username
            </Form.Label>
            <Form.Control
              placeholder="username"
              aria-label="username"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  username: e.target.value
                })
              }}
            />
          </Col>
          <Col className="form-col">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              aria-label="password"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  password: e.target.value
                })
              }}
            />
          </Col>
          <Col className="form-col">
            <Button
              variant="primary"
              type="submit"
              disabled={this.isLoginEnabled()}
              onClick={() => window.location.href = '/dashboard'}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login
