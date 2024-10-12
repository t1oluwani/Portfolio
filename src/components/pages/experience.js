import '../styling/experience.css';
import React, { useEffect, useState, useRef } from 'react';

import TimelineEvent from '../features/timelineEvent';
import timelineData from '../../assets/data/timelineData.json'

const ExperiencePage = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const sortedTimelineData = timelineData.sort((a, b) => {
    return new Date(b.end) - new Date(a.end);
  });

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
    <section id="experiences" className="experiencepage" ref={sectionRef}>
      <div className="sectionHead">
        <span className="opener">Let me take you through my</span>
        <h2 className="headliner">EXPERIENCES</h2>
      </div>

      <div className="sectionBody">
        <div className="timeline">
          <div className="timeline-container">
            {sortedTimelineData.map((event, idx) => (
              <TimelineEvent event={event} key={idx} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ExperiencePage;