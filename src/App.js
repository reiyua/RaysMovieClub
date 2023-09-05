import { FirebaseConfig } from "./config/Config";
import { initializeApp } from "firebase/app";
import {Routes, Route} from "react-router-dom";

import { Header } from "./components/Header";
import './App.css';
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
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
        <Route path="/" element={ <Home greeting="Hey you, you're at home!" /> } />
        <Route path="/about" element={ <About greeting="Hey you, this is about page!" /> } />
        <Route path="/contact" element={ <About greeting="Hey you, this is contact page!" /> } />
      </Routes>
        </div>
      );
  }


export default App;
