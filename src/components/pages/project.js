import '../styling/project.css';
import React, { useEffect, useRef, useState } from 'react';

import ProjectEntry from '../features/projectEntry';
import projectData from '../../assets/data/projectData.json'

const ProjectPage = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projectpage" ref={sectionRef}>
      <div className="sectionHead">
        <span className="opener">Here are some of my</span>
        <h2 className="headliner">RECENT PROJECTS</h2>
      </div>

      <div className="sectionBody">
        <div className="projects">
          <ul className="projectList">
            {projectData.map((project, idx) => (
              <ProjectEntry project={project} key={idx} isVisible={isVisible}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

export default ProjectPage;