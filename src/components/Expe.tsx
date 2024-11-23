import ex from "../assets/Expe.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import git from "../assets/github.png";
import jav from "../assets/java.png";
import rea from "../assets/react.png";
import pyth from "../assets/python.png";
import doc from "../assets/docker.png";


function Expe() {
  return (
    <div className="Expe_page">
      <div>
        <img src={ex} alt="" />
      </div>
      <section>
        <div className="card">
          <img src={pyth} alt="" />
          <h4>Python</h4>
        </div>
        <div className="card">
          <img src={rea} alt="" />
          <h4>React</h4>
        </div>
        <div className="card">
          <img src={doc} alt="" />
          <h4>Docker</h4>
        </div>
        <div className="card">
          <img src={jav} alt="" />
          <h4>Java</h4>
        </div>
        <div className="card">
          <img src={git} alt="" />
          <h4>Github</h4>
        </div>
        <div className="card">
          <img src={js} alt="" />
          <h4>JS</h4>
        </div>
        <div className='card'>
          <img src={css} alt="" />
          <h4>CSS</h4>
        </div>
        <div className='card'>
          <img src={html} alt="" />
          <h4>HTML</h4>
        </div>
      </section>
    </div>
  );
}

export default Expe;
