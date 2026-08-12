import Navbar from './nav'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'
import AKF from './AKF'
import ScrollReveal from './ScrollReveal'
import { CustomCursor } from '@/components/ui/custom-cursor';

function App() {
  return (
    <>
      <CustomCursor color="#ffffff">
          <Navbar />
        <Home />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <AKF />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        <Footer />
      </CustomCursor>
      
    </>
  )
}

export default App