import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { AuthContext } from "../contexts/AuthContext"
import { useContext, useState } from "react"

const submitHandler = (event) => {
event.preventDefault()
}

export function ReviewForm(props) {
  const auth = useContext(AuthContext)
  const[star, setStar ] = useState()
  const[title, setTitle ] = useState()
  const[review, setReview ] = useState()
  if (auth) {
    return (
      <Form onSubmit={submitHandler} className="my-4">
        <h3>Review {props.movietitle}</h3>
        <Form.Group>
          <Form.Label>Star</Form.Label>
          <Form.Select
            name="star"
            value={star}
            onChange={(evt) => setStar(evt.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Form.Text>You have given {star} star(s)</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="I love this movie"
            name="title"
            onChange={(evt) => setTitle(evt.target.value) }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            cols={30}
            placeholder="I could not stop watching!"
            name="content"
            onChange={(evt) => setReview(evt.target.value) }
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    );
  } else {
    return null;
  }
}
