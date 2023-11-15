import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemImage } from '../components/ItemImage';
import Button from 'react-bootstrap/Button';

export function Detail(props) {
    const [movieData, setMovieData] = useState()

    let { id } = useParams()

    useEffect(() => {
        if (!movieData) {
            props.handler(id).then((movie) => setMovieData(movie))
        }
    }, [id])

    if (movieData) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>{movieData.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ItemImage source={movieData.cover_image} />
                    </Col>
                    <Col md={6}>
                        <h2>More Information</h2>
                        <h3>Synopsis</h3>
                        <p>{movieData.synopsis}</p>
                        <h2>Key People</h2>
                        <h3>Main Actors</h3>
                        <p>{movieData.main_actors}</p>
                        <h3>Director</h3>
                        <p>{movieData.director}</p>
                        <h3>Producers</h3>
                        <p>{movieData.producer}</p>
                        <h3>Genre</h3>
                        <p>{movieData.genre}</p>
                        <h3>IMDB Link</h3>
                        <p>{movieData.imdb_link}</p>
                        <Form>
                            <h3>Review this movie</h3>
                            <Form.Group>
                                <Form.Label>Star Rating</Form.Label>
                                <Form.Select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Best movie in ages!" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows={4} cols={30} placeholder="This movie had me hooked!" />
                            </Form.Group>
                            <Button type="submit" variant="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
    else {
        return null;
        
        }
    }