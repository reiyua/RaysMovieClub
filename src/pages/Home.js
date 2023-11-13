import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


import { useState, useEffect, useContext } from "react"
import { ItemImage } from "../components/ItemImage"

export function Home(props) {
    const [movies,setMovies] = useState([])

    useEffect(() => {
      console.log( props.items )
      setMovies( props.items )
    }, [props.items])
  
  
  
    const ItemCards = movies.map( ( movie, itemkey ) => {
      return(
        <Col md={4}>
          <Card key={itemkey}>
            <ItemImage source={ movie.cover_image} />
            <Card.Body>
              <Card.Title>{ movie.title }</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  
    return (
      <Container>
        <Row>
          {ItemCards}
        </Row>
      </Container>
    )
  }
