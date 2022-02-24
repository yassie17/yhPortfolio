import Navbar from "./Navbar";
import "./Styles/AboutMe.scss";
import me from "./Assets/me.png";

function AboutMe(props) {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about-img">
          <img src={me} />
        </div>
        <div className="about-text">
          <h1>Me, Myself and I</h1>
          <p>
            Hello, I'm an ambitious 8th semester digital Media Engineering and
            Technology student at the German University in Cairo and currently
            working on my bachelor thesis/project. I have already finished alot
            of courses in various fields including software development and
            programming, digital signals, image and video processing, computer
            graphics and animations, networks, computer architecture and
            hardware, media and game development. I am also goal-driven with
            good problem solving skills and a passion for web, apps and game
            development, as well as image processing.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
