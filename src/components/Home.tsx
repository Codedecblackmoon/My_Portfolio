import logo from '../assets/coool.png'

function Home() {
    return (
        <div className="home_page">
          <div>
             <img src={logo} alt="" />
          </div>
         
          <section>
            <h1 className="name">Gideon Lengg</h1>
            <h3>
              <style color="orange">“</style>There are three responses to a piece of design – yes, no, and WOW!
              Wow is the one to aim for"
            </h3>
            <h4>― Milton Glaser.</h4>
            <button>Know me</button>
          </section>
        </div>
      );
}

export default Home 
