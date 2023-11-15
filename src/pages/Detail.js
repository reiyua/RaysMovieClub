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

    let { id } = useParams();

    useEffect(() => {
        if (!movieData && typeof props.handler === 'function') {
            const fetchMovieData = async () => {
                const movieData = await props.handler(id);
                setMovieData(movieData);
            };
            fetchMovieData();
        }
    }, [id, movieData, props.handler]);

    if (movieData) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>{movieData.movie_title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ItemImage source={movieData.cover_image} />
                    </Col>
                    <Col md={6}>
                        <h2>More information</h2>
                        <h3>Summary</h3>
                        <p>{movieData.synopsis}</p>
                        <h3>People Who Contributed:</h3>
                        <p>{movieData.director}</p>
                        <p>{movieData.main_actors}</p>
                        <p>{movieData.producer}</p>
                        <h3>Further Information</h3>
                        <p>IMDB: {movieData.imdb_link}</p>
                        <Form>
                            <h3>Review this movie</h3>
                            <Form.Group>
                                <Form.Label>Star</Form.Label>
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
                               <Form.Control type="text" placeholder="I love this movie!" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows={3} cols={30} placeholder="I was hooked watching this movie!" />
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
        return null
    }

}
