import Navbar from "./Navbar";
import "./Styles/Home.scss";
import home from "./Assets/homepage.jpeg";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-text">
          <h1>
            <span>Hello, </span>
            <br />
            I'm Yassmine Haggag
          </h1>
          <h2>Software Developer</h2>
          <p>
            Just a passionate junior full stack software developer that has past
            experience with both frontend and backend
          </p>
        </div>
        <img src={home} />
      </div>
    </>
  );
}

export default Home;
