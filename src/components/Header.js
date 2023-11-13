import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

export function Header(props) {
  // props.items is the value of nav state in App.js
  // create a collection of navigation items
  const Links = props.items.map((item, itemkey) => {
    return (
      <Nav.Link href={item.link} key={itemkey}> {item.label}  </Nav.Link>
    )
  })
  // component for Account
  const Account = (props) => {
    if (props.user) {
      return (
        <Account user={ props.user } />
       // <NavDropdown title="Account">
         // <NavDropdown.Item href="/signout">Log out</NavDropdown.Item>
        // </NavDropdown>
      )
    }
    else {
      return null
    }

  }
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Ray's Movie Club</Navbar.Brand>
        <Nav>
          {Links}
          <NavDropdown title={props.user.email}>
          <NavDropdown.Item href="/signout">Log out</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Container>
    </Navbar>)
}