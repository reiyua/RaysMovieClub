import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import {useState, useEffect} from 'react';

export function Signup ( props ) {
   const[username,setUsername] = useState('')
    const[validusername,setValidusername] = useState(false)
   const[useremail,setUseremail] = useState('')
    const[password,setPassword] = useState('')
    
    const submitHandler = (evt) => {
        evt.preventDefault()
    }

    useEffect( () => {
        if(username.length > 4) {
           console.log("longer than 4 characters")
        }
        }, [username] )

    return (
       
       <Container>
        <Row>
            <Col md={{span: 4, offset:4}}>
           <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="text"
                    name="username"
                    placeholder='username'
                    onChange={ (evt) => setUsername(evt.target.value) }
                    />
                    </Form.Group>
                    <Form.Group>    
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder='you@example.com'/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder='password'/>
                    </Form.Group>
                    <Button variant="primary" className="mt-3 w-100" type="submit">Sign up</Button>
                </Form>
                </Col>
                </Row>
       </Container>
    )
}