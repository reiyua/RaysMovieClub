import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

import { useParams } from 'react-router-dom';

export function Detail(props) {
    let { id } = useParams();
    return(
        <Container>
            <Row>
                <Col md={6}>
                <h1>Image</h1>
                </Col>
                <Col md={6}>
                <h2>Details</h2>
                <p>{id}</p>
                </Col>
            </Row>
        </Container>
    )
}