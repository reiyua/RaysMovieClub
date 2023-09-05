import { FirebaseConfig } from "./config/Config"
import { initializeApp } from "firebase/app"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import { Header } from "./components/Header"
import './App.css'
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"


function App() {
  const FBapp = initializeApp(FirebaseConfig)
  // navigation array
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Create Account", link: "/signup" },
    { label: "Log in", link: "/signin" },
  ]
// navigation for authenticated user
const AuthNavItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Log out", link: "/signout"}
] 

/// application states

  const saySomething = ( word ) => {
    alert( word )
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home greeting="Hey you're at home!" /> } />
        <Route path="/about" element={ <About greeting="Hey you, this is about page!" handler={saySomething} /> } />
        <Route path="/contact" element={ <Contact greeting="Hey you, this is contact page!" /> } />
      </Routes>
    </div>
  );
}
export default App;