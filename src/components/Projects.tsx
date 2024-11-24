import pro from '../assets/pro.png'
import stn from '../assets/path14.png'

function Projects() {
    return (
        <div className="Projects_page">
          <div className="project_grid">
            <div className="project_card">
              <img src={pro} />
              <h3>Project 1</h3>
              <div className="info">
                <button>Code</button>
                <button>Demo</button>
              </div>
            </div>
            <div className="project_card">
              <img src={pro} />
              <h3>Project 2</h3>
              <div className="info">
                <button>Code</button>
                <button>Demo</button>
              </div>
            </div>
            <div className="project_card">
              <img src={pro} />
              <h3>Project 3</h3>
              <div className="info">
                <button>Code</button>
                <button>Demo</button>
              </div>
            </div>
          </div>
          <div id="stend">
            <img src={stn} alt="" />
          </div>
        </div>
      );
}

export default Projects 