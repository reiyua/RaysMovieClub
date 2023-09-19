import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export function Signin ( props ) {
    const [email, setEmail] = useState('')
    const [validemail, setValidemail] = useState(false)
    const [password, setPassword] = useState('')
    const [validpassword, setValidpassword] = useState(false)
    const navigate = useNavigate()

    useEffect( () => {
        if(email.indexOf('@') > 0) {
            setValidemail(true)
        }
        else {
            setValidemail( false )
        }
    }, [email])

    useEffect( () => {
        if( password.length >= 8 ) {
            setValidpassword(true)
        }
        else {
            setValidpassword( false )
        }
    }, [password])

    useEffect( () => {
      if( props.authstate ) {
        navigate('/')
      }
    }, [props.authstate])

    const submitHandler = (evt) => {
    evt.preventDefault()
    props.handler( email, password )
    }
    
    return (
        <Container>
        <Row>
          <Col md={ {span: 4, offset: 4} }>
        <Form onSubmit={ submitHandler }>
        <Form.Group>
        <Form.Label>Email</Form.Label>
  
                <Form.Control
  
                  type="email"
  
                  name="email"
  
                  placeholder="you@example.com"

                  value={email}

                  onChange={ (evt) => setEmail(evt.target.value)}
                  
  
                />
  
              </Form.Group>
  
              <Form.Group>
  
                <Form.Label>Password</Form.Label>
  
                <Form.Control
  
                  type="password"
  
                  name="password"
  
                  placeholder="minimum 8 characters"

                  value={ password }

                  onChange={ (evt) => setPassword(evt.target.value)} 
  
                 
  
                />
  
              </Form.Group>
              <Button
                variant="primary"
                className="mt-3 w-100"
                type="submit"
                disabled={ (validemail && validpassword) ? false : true }
                >
                
                Sign in
              </Button>
  
            </Form>
  
          </Col>
  
        </Row>
  
      </Container>
    )
}