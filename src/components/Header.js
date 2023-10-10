import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavDropdown } from "react-bootstrap/NavDropdown"

export function Header ( props ) {
    // props.items is the value of nav state in App.js
    // create a collection of navigation items
    const Links = props.items.map( (item, itemkey) => {
return (
        <Nav.Link href={item.link} key={itemkey}> {item.label}  </Nav.Link>
)
    } )
    return (
            <Navbar>
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav>
            {Links}
            </Nav>
        </Container>
      </Navbar>)
}