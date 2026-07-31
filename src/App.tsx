import Navbar from './nav'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'
import ScrollReveal from './ScrollReveal'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
    </>
  )
}

export default App