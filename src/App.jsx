import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
function App(){
  return(
    <>
     <Navbar /> 
     <Hero />
     <Skills />
     <About />
     <Projects />
     <Contact />
    </>
  )
}
export default App;