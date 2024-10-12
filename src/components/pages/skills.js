import '../styling/skills.css';
import SkillSlider from '../features/skillSlider';

import { useRef, useState, useEffect } from 'react';

const SkillsPage = () => {
  const sectionRef = useRef(null);
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
    <section id="skills" className="skillspage" ref={sectionRef}>
      <div className="sectionHead">
        <span className="opener">Take a look at</span>
        <h2 className="headliner">MY SKILLS</h2>
      </div>

      <div className="sectionBody">
        <SkillSlider isVisible={isVisible}/>
      </div>
    </section>
  )
};

export default SkillsPage;