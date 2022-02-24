import "./Styles/ProjectCard.scss";

function ProjectCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="project-pic" className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <a className="card__btn" href={props.link}>View Website</a>
      </div>
    </div>
  );
}

export default ProjectCard;
