import '../styling/experience.css';
import React, { useEffect, useState, useRef } from 'react';

import TimelineEvent from '../features/timelineEvent';
import timelineData from '../../assets/data/timelineData.json'

const ExperiencePage = () => {
  const sectionRef = useRef();
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  console.log("ExperiencePage HasBeenSeen: ", hasBeenSeen);

  const sortedTimelineData = timelineData.sort((a, b) => {
    return new Date(b.end) - new Date(a.end);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasBeenSeen) {
          setHasBeenSeen(true);
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the section is visible
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
              <TimelineEvent event={event} key={idx} hasBeenSeen={hasBeenSeen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ExperiencePage;