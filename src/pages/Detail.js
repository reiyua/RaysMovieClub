import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemImage } from '../components/ItemImage';
import Button from 'react-bootstrap/Button';
import { ReviewForm } from '../components/ReviewForm';
import { Reviews } from '../components/Reviews';
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
                        <h1>{movieData.movie_title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ItemImage source={movieData.cover_image} />
                    </Col>
                    <Col md={8}>
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ReviewForm movietitle={movieData.movie_title} movieId={movieData.id} />
                    </Col>
                </Row>
                <Row>
                    <Reviews movieId={movieData.id} />
                </Row>
            </Container>
        )
    }
    else {
        return null;

    }
}