import "react-bootstrap/Container"
import "react-bootstrap/Navbar"
import "react-bootstrap/Nav"
import './App.css';
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap/esm";
import { FirebaseConfig } from "./config/Config";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
        </Container>
      </Navbar>
        <h1>React App</h1>
        </div>
      );
  }


export default App;
