import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Routes>
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
