import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import { ref, getDownloadURL } from "firebase/storage"
import { useState, useEffect, useContext } from "react"
import { StorageContext } from '../contexts/StorageContext';

export function Home(props) {
    const [books, setBooks] = useState([props.items])

    const Storage = useContext(StorageContext)
    console.log(props.items)

    // useEffect( () => {
    //     if( books.length === 0 )
    //     setBooks(props.items)
    // }
    // , [props.items])

    // card image component
    const ItemImage = (props) => {
        const [image, setImage] = useState()
        useEffect(() => {


        }, [props.name, image])
        const imgRef = ref(Storage, `book_covers/${props.name}`)
        if (image) {
            return (
                <Card.Img variant="top" src={image} />
            )
        }

        else {
            return (
                <p>Loading...</p>
            )
        }
    }
 
    if (!books) {
        return null
    }
    else {
           // collection
    const Items = books.map((item, key) => {
        return (
            <Col key={key} md="4">
                <Card>
                    <Card.Body>
                        <ItemImage name={item.cover_image} />
                        <Card.Title>{item.book_title}</Card.Title>
                        <Card.Text>
                            By {item.author}
                        </Card.Text>
                        <Card.Text>{item.cover_image}</Card.Text>
                    </Card.Body>
                </Card>

            </Col>
        )
    })
        return (
            <Container>
                <Row>
                    {Items}
                </Row>
            </Container>

        )
    }

}