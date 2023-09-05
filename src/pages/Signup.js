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
                    <Form.Control name="text" placeholder='username'/>
                    </Form.Group>
                </Form>
                </Col>
                </Row>
       </Container>
    )
}