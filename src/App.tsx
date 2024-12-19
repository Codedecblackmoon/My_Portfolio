import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contect from './components/Contact'
import AXA from './components/Expe';
import  git from './assets/git_whait.png'
import  intsa from './assets/insta.png'
import  link from './assets/link.png'

function App() {
  
  return (
    <>
     <div className="App">
      
      <nav className="navbar">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Experience">Experience</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>

      <div id="Home"><Home /></div>
      <div id="About"><About/></div>
      <div id="Experience"><AXA></AXA></div>
      <div id="Projects"><Projects/></div>
      <div id="Contact"><Contect/></div>

      <footer>
        <div id="media">
          <a href="https://www.instagram.com/gideon.l2">
            <img src={intsa} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/gideon-lenge">
            <img src={link} alt="" />
          </a>

          <a href="https://github.com/Codedecblackmoon">
            <img src={git} alt="" />
          </a>
        </div>

        <div id="content">
          <h6 id="email">gideonlenge96@gmail.com</h6>
          <h6 id="email">+27 815 - 892 - 060</h6>
          <h6 id="email">By Gideon.L</h6>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
