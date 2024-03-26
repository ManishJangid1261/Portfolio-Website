
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import Skills from "./Components/Skills"
import Testimonials from "./Components/Testimonials"
import {UserProvider} from './Portfolio'

function App() {

  return (
    <>
    <UserProvider>
    <Home/>
    <Navbar/>
    <Skills/>
    <Services/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    </UserProvider>
    </>
  )
}

export default App
