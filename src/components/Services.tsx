import web from '../assets/web.png';
import gd from '../assets/gd.png';
import ill from '../assets/logo.png';
import dD from'../assets/3d.png';
import systems from '../assets/system.png';
import webapp from '../assets/webapp.png';

function Services() {
    return (
        <div className="services_page">
            <section>
                <h2>Services</h2>
                <div className='services'>
                    <div id='set1'>
                        <div id='s1'>
                            <img src={web} alt="" />
                            <p><strong>Web development</strong><br />Html, Css, Js, Typescript, Node.js</p>
                        </div>
                        <div id='s1'>
                            <img src={systems} alt="" />
                            <p><strong>System Integrationt</strong><br />Node.js, Python, Java</p>
                        </div>
                        <div id='s1'>
                            <img src={webapp} alt="" />
                            <p><strong>Web Application</strong><br />React, Node.js, Python</p>
                        </div>
                    </div>
                    <div id='set2'>
                        <div id='s1'>
                            <img src={dD} alt="" />
                            <p><strong>3D Modaling</strong><br />Blende, Maya, 3ds Max, </p>
                        </div>
                        <div id='s1'>
                            <img src={gd} alt="" />
                            <p><strong>Graphic Design</strong><br /> Adobe Photoshop, InDesign, Mockups</p>
                        </div>
                        <div id='s1'>
                            <img src={ill} alt="" />
                            <p><strong>Illustation</strong><br />Adobe Illustrator, Inkscape</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
      );
}

export default Services 