import { FirebaseConfig } from "./config/Config"
import { initializeApp } from "firebase/app"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Header } from "./components/Header"
import './App.css'
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Signup } from "./pages/Signup"


function App() {
  const FBapp = initializeApp(FirebaseConfig)
  const FBauth = getAuth(FBapp)
  // navigation array
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Create Account", link: "/signup" },
    { label: "Log in", link: "/signin" },
  ]
  // navigation for authenticated user
  const AuthnavItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Log out", link: "/signout" }
  ]

  /// application states
  const [nav, setNav] = useState(navItems)


  const saySomething = (word) => {
    alert(word)
  }

  // signing up a user
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => {
        // do something
      })
      .catch((error) => console.log(error.message))
    }
    return (
      <div className="App">
        <Header items={nav} />
        <Routes>
          <Route path="/" element={<Home greeting="Hey you're at home!" />} />
          <Route path="/about" element={<About greeting="Hey you, this is about page!" handler={saySomething} />} />
          <Route path="/contact" element={<Contact greeting="Hey you, this is contact page!" />} />
          <Route path="/signup" element={<Signup handler={signUp}/>} />
        </Routes>
      </div>
    );
  }

  export default App;