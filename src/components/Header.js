import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export function Header ( props ) {
    return (    <Navbar>
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/signup">Create Account</Nav.Link>
            <Nav.Link href="/signin">Sign in</Nav.Link>
            </Nav>
        </Container>
      </Navbar>)
}