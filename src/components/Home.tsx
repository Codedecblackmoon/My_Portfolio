import logo from '../assets/coool.png'

function Home() {
    return (
        <div className="home_page">
          <div>
             <img src={logo} alt="" />
          </div>
         
          <section>
            <h1 className="name">Hi, I'm Gideon Lenge</h1>
            <h3>
            <span style={{ color: "orange", fontSize: "20px", fontStyle: "bold" }}>"</span>There are three responses to a piece of design – yes, no, and WOW!
              Wow is the one to aim for<span style={{ color: "orange", fontSize: "20px", fontStyle: "bold" }}>"</span>
            </h3>
            <h4>― Milton Glaser ―</h4>
            <button>Know me</button>
          </section>
        </div>
      );
}

export default Home 
