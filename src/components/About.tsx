import pic from '../assets/newpic_2.png'
import cv from '../assets/Gideon_Lenge_CV.pdf'

function About() {
    return (
        <div className="About_page">
            <section>
                <p>I'm a dedicated and detail-oriented junior software developer with a creative approach to problem-solving, always seeking new and visually appealing ways to address technical challenges. With a foundation in both front-end and back-end development, particularly in JavaScript and Python, I enjoy crafting efficient, scalable applications that prioritize user experience. <br/> <br/> Known for my creativity, I thrive in collaborative environments where I can contribute unique solutions that enhance functionality and design.</p>
                <a href={cv} download="Gideon_Lenge_CV.pdf">
                    <button>Download CV</button>
                </a>
            </section>

            <div>
                <img src={pic} alt="" />
            </div>
        </div>
      );
}

export default About 