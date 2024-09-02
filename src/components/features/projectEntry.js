import '../styling/project.css';

const ProjectEntry = ({ project }) => {

  return (
    <>
      {project.display && <li className={`projectItem ${project.identifier}`}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="skillList">
          {project.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
        <div className="projectButtons">
          {project.liveview && <a className="viewbtn" href={project.liveview} target="blank">View Live &gt;</a>}
          {project.sourcecode && <a className="viewbtn" href={project.sourcecode} target="blank">Github Repo &gt;</a>}
        </div>
      </li>}
    </>
  );
}

export default ProjectEntry;