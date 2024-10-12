import '../styling/skills.css';
import { useRef, useState, useEffect } from 'react';

import SkillSlider from '../features/skillSlider';

const SkillsPage = () => {
  const sectionRef = useRef();
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  console.log("SkillsPage HasBeenSeen: ", hasBeenSeen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasBeenSeen) {
          setHasBeenSeen(true);
        }
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
    <section id="skills" className="skillspage" ref={sectionRef}>
      <div className="sectionHead">
        <span className="opener">Take a look at</span>
        <h2 className="headliner">MY SKILLS</h2>
      </div>

      <div className="sectionBody">
        <SkillSlider hasBeenSeen={hasBeenSeen}/>
      </div>
    </section>
  )
};

export default SkillsPage;