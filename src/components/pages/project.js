import '../styling/project.css';
import ProjectEntry from '../features/projectEntry';
import projectData from '../../assets/data/projectData.json'

const ProjectPage = () => {
  return (
    <section id="projects" className="projectpage">
      <div className="sectionHead">
        <span className="opener">Here are some of my</span>
        <h2 className="headliner">RECENT PROJECTS</h2>
      </div>

      <div className="sectionBody">
        <div className="projects">
          <ul className="projectList">
            {projectData.map((project, idx) => (
              <ProjectEntry project={project} key={idx} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

export default ProjectPage;