import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Signup ( props ) {
    return (
       
       <Container>
        <Row>
            <Col>
           <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder='username'/>
                    </Form.Group>
                    <Form.Group>    
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder='you@example.com'/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder='password'/>
                    </Form.Group>
                </Form>
                </Col>
                </Row>
       </Container>
    )
}