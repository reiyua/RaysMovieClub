import { FirebaseConfig } from "./config/Config";
import { initializeApp } from "firebase/app";
import {Routes, Route} from "react-router-dom";

import "react-bootstrap/Container"
import "react-bootstrap/Navbar"
import "react-bootstrap/Nav"
import './App.css';
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap/esm";


function App() {
  const FBapp = initializeApp(FirebaseConfig);
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={ <Home greeting="Hey you, this is home page!" /> } />
        <Route path="/about" element={ <About greeting="Hey you, this is about page!" /> } />
      </Routes>
        </div>
      );
  }


export default App;
