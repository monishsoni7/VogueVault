import React from 'react'
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/footer.jsx";
import Experience from "./sections/Experience.jsx";
import "./index.css";
const  App = () => {
    return (
      <main className="max-w-7xl mx-auto">
          <Navbar/>
          <Hero />
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
          <Footer/>
      </main>
    )
}
export default App
