import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import jetAway from "./Assets/jetAway.png";
import david from "./Assets/david.png";
import game from "./Assets/game.png";
import todo from "./Assets/todo.png";
import flags from "./Assets/flags.png";
import photogallery from "./Assets/photogallery.png";
import candy from "./Assets/candy.png";
import tip from "./Assets/tip.png";
import draw from "./Assets/draw.png";
import score from "./Assets/score.png";
import form from "./Assets/form.png";
import cards from "./Assets/cards.png";
import cards2 from "./Assets/cards2.png";
import math from "./Assets/math.png";
import mock0 from "./Assets/mock0.png";
import mock1 from "./Assets/mock1.png";
import mock2 from "./Assets/mock2.png";
import mock3 from "./Assets/mock3.png";

function Projects(props) {
  const projects = [
    {
      img: jetAway,
      title: "JetAway",
      description:
        "Team Project of a Responsive Flight Reservation System build using MERN Stack",
      link: "https://github.com/advanced-computer-lab/WeekEnd-developers",
    },
    {
      img: david,
      title: "DAVID CHU'S CHINA BISTRO",
      description:
        "Individual Project of a Responsive Restuarant's Website build with HTML, Bootstrap CSS and JS",
      link: "https://yassie17.github.io/coursera-test/module5-solution/",
    },
    {
      img: game,
      title: "Rock Paper Scissors Lizard Spock",
      description:
        "Team Project of a Responsive Game build with HTML, CSS and JS",
      link: "https://yassie17.github.io/Ignite/Task7/",
    },
    {
      img: todo,
      title: "Responsive To Do List",
      description:
        "Individual Project of a Responsive To Do List App with Light/Dark Modes build with HTML, CSS and JS",
      link: "https://yassie17.github.io/Ignite/Task3/",
    },
    {
      img: flags,
      title: "Responsive Countries Displayer",
      description:
        "Individual Project of a Responsive Countries Displayer using REST API with Light/Dark Modes build with HTML, CSS and JS",
      link: "https://yassie17.github.io/Ignite/Task6/",
    },
    {
      img: photogallery,
      title: "Responsive Photo Gallery",
      description:
        "Individual Project of a Responsive Photo Gallery build with HTML, CSS and JS",
      link: "https://yassie17.github.io/Ignite/Task5/",
    },
    {
      img: candy,
      title: "Responsive Photo Gallery",
      description:
        "Individual Project of a Responsive Photo Gallery build with HTML and BootStrap CSS",
      link: "https://yassie17.github.io/WebDevBootcamp/Project3/",
    },
    {
      img: tip,
      title: "Responsive Tip Calculator",
      description:
        "Individual Project of a Responsive Tip Calculator build with HTML, CSS and JS",
      link: "https://yassie17.github.io/Ignite/Task4/",
    },
    {
      img: draw,
      title: "Responsive Drawing App",
      description:
        "Individual Responsive Drawing App build with HTML, CSS, JQuery and Canvas",
      link: "https://yassie17.github.io/CompleteWebDev/Project8/",
    },
    {
      img: score,
      title: "Responsive Score Keeping",
      description:
        "Individual Responsive Score Keeping App build with HTML, bulma CSS, and JS",
      link: "https://yassie17.github.io/WebDevBootcamp/Project4/",
    },
    {
      img: form,
      title: "Mock Responsive Form",
      description:
        "Individual Mock Responsive Form build with HTML, CSS and JS",
      link: "https://yassie17.github.io/Ignite/Task2/",
    },
    {
      img: cards,
      title: "Mock Responsive Cards",
      description:
        "Individual Mock Responsive Cards build with HTML and CSS",
      link: "https://yassie17.github.io/Ignite/Task1/",
    },
    {
      img: cards2,
      title: "Mock Responsive Cards",
      description:
        "Individual Mock Responsive Cards build with HTML and CSS",
      link: "https://yassie17.github.io/WebDevBootcamp/Project1/",
    },
    {
      img: math,
      title: "Math Game",
      description:
        "Individual Math game build with HTML, CSS and JS",
      link: "https://yassie17.github.io/CompleteWebDev/Project2/",
    },
    {
      img: mock0,
      title: "Mock Responsive Website",
      description:
        "Individual Mock Responsive Website build with HTML and Bootstrap CSS",
      link: "https://yassie17.github.io/WebDevBootcamp/Project2/",
    },
    {
      img: mock1,
      title: "Mock Responsive Article Website",
      description:
        "Individual Mock Responsive Website build with HTML, CSS and JS",
      link: "https://yassie17.github.io/coursera-test/module3-solution/",
    },
    {
      img: mock2,
      title: "Mock Responsive Menu Website",
      description:
        "Individual Mock Responsive Website build with HTML, CSS and JS",
      link: "https://yassie17.github.io/coursera-test/module2-solution/",
    },
    {
      img: mock3,
      title: "Mock Tutorials Website",
      description:
        "Individual Mock Tutorials Website build with HTML and CSS",
      link: "https://yassie17.github.io/CompleteWebDev/Project1/",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="wrapper">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={project+i}
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
