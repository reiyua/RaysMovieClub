import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import {useState, useEffect} from 'react';

export function Signin ( props ) {
    return (
        <Container>
        <Row>
          <Col md={ {span: 4, offset: 4} }>
  
        <Form>
  
              <Form.Group>
  
                <Form.Label>Email</Form.Label>
  
                <Form.Control
  
                  type="email"
  
                  name="email"
  
                  placeholder="you@example.com"
  
                  
  
                />
  
              </Form.Group>
  
              <Form.Group>
  
                <Form.Label>Password</Form.Label>
  
                <Form.Control
  
                  type="password"
  
                  name="password"
  
                  placeholder="minimum 8 characters"
  
                 
  
                />
  
              </Form.Group>
              <Button
                variant="primary"
                className="mt-3 w-100"
                type="submit">
                Sign in
              </Button>
  
            </Form>
  
          </Col>
  
        </Row>
  
      </Container>
    )
}