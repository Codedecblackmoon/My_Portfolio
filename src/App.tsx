import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contect from './components/Contect'
// import AXA from './components/I_dont_know_yet'


function App() {
  
  return (
    <>
     <div className="App">
      
      <nav className="navbar">
        <a href="#_1">Home</a>
        <a href="#_2">about</a>
        <a href="#_3">Expirenc</a>
        <a href="#_4">Projects</a>
        <a href="#_5">Content</a>
      </nav>

      <div id="_1"><Home /></div>
      <div id="_2"><About/></div>
      <div id="_3"><Contect/></div>
      <div id="_4"><Projects/></div>
      <div id="_5">page 5</div>

      <footer><p>footer</p></footer>
    </div>
    </>
  )
}

export default App
