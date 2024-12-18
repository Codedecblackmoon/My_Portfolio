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
        <a href="#_1">Home</a>
        <a href="#_2">About</a>
        <a href="#_3">Expirenc</a>
        <a href="#_4">Projects</a>
        <a href="#_5">Content</a>
      </nav>

      <div id="_1"><Home /></div>
      <div id="_2"><About/></div>
      <div id="_3"><AXA></AXA></div>
      <div id="_4"><Projects/></div>
      <div id="_5"><Contect/></div>

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
