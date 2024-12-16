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
                <button>
                  <i className="fa-brands fa-github"></i>
                </button>
                <button>
                  <i className="fa-solid fa-globe"></i>
                </button>
              </div>
            </div>
            <div className="project_card">
              <img src={pro} />
              <h3>Project 2</h3>
              <div className="info">
                <button>
                  <i className="fa-brands fa-github"></i>
                </button>
                <button>
                  <i className="fa-solid fa-globe"></i>
                </button>
              </div>
            </div>
            <div className="project_card">
              <img src={pro} />
              <h3>Project 3</h3>
              <div className="info">
                <button>
                  <i className="fa-brands fa-github"></i>
                </button>
                <button>
                  <i className="fa-solid fa-globe"></i>
                </button>
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