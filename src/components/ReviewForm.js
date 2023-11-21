import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export function ReviewForm(props) {
  return (
    <Form>
      <h3>Rewiew this movie</h3>
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
        <Form.Control type="text" placeholder="I love this movie" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Review</Form.Label>
        <Form.Control as="textarea" rows={4} cols={30} placeholder="I could not stop watching!" />
      </Form.Group>
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  )
}