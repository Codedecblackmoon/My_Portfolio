import ex from "../assets/Expe.png";
import html from "../assets/html_black.png";
import css from "../assets/css_black.png";
import js from "../assets/js_black.png";
import git from "../assets/git_black.png";
import jav from "../assets/java_black.png";
import rea from "../assets/react_black.png";
import pyth from "../assets/python_black.png";
import doc from "../assets/docker_black.png";
import flu from "../assets/lf.png"
import sql from "../assets/laql.png"
import sb from "../assets/lsb.png"
import net from "../assets/ts_black.png"

function Expe() {
  return (
    <div className="Expe_page">
      <div>
        <img src={ex} alt="" />
      </div>
      <section>
        <div className="card">
          <img src={pyth} alt="" />
          ghjkl
        </div>
        <div className="card">
          <img src={rea} alt="" />
        </div>
        <div className="card">
          <img src={doc} alt="" />
        </div>
        <div className="card">
          <img src={jav} alt="" />
        </div>
        <div className="card">
          <img src={git} alt="" />
        </div>
        <div className="card">
          <img src={js} alt="" />
        </div>
        <div className='card'>
          <img src={css} alt="" />
        </div>
        <div className='card'>
          <img src={html} alt="" />
        </div>
        <div className='card'>
          <img src={net} alt="" />
        </div>
        <div className='card'>
          <img src={flu} alt="" />
        </div>
        <div className='card'>
          <img src={sql} alt="" /> 
        </div>
        <div className='card'>
          <img src={sb} alt="" />
        </div>
        <div className="card">
          <img src="" alt="" />
        </div>
        <div className="card">
          <img src="" alt="" />
        </div>
        <div className="card">
          <img src="" alt="" />
        </div>
        <div className="card">
          <img src="" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Expe;
