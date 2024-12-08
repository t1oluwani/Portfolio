import '../styling/project.css';
import React, { useEffect, useRef, useState } from 'react';

import ProjectEntry from '../features/projectEntry';
import projectData from '../../assets/data/projectData.json'

const ProjectPage = () => {
  const sectionRef = useRef();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  console.log("ProjectPage HasBeenSeen: ", hasBeenSeen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasBeenSeen) {
          setHasBeenSeen(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const currentRef = sectionRef.current; // Store the current ref in a variable to avoid eslint warnings

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored variable
      }
    };
  }, [hasBeenSeen]);

  const displayedProjects = showAllProjects ? projectData : projectData.slice(0, 6); // Initially display only 6 projects

  return (
    <section id="projects" className="projectpage" ref={sectionRef}>
      <div className="sectionHead">
        <span className="opener">Here are some of my</span>
        <h2 className="headliner">RECENT PROJECTS</h2>
      </div>

      <div className="sectionBody">
        <div className="projects">
          <ul className="projectList">
            {displayedProjects.map((project, idx) => (
              <ProjectEntry project={project} key={idx} hasBeenSeen={hasBeenSeen}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

export default ProjectPage;