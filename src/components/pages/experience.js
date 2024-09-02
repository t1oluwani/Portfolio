import '../styling/experience.css';
import TimelineEvent from '../features/timelineEvent';
import timelineData from '../../assets/data/timelineData.json'

const ExperiencePage = () => {
  const sortedTimelineData = timelineData.sort((a, b) => {
    return new Date(b.end) - new Date(a.end);
  });

  return (
    <section id="experiences" className="experiencepage">
      <div className="sectionHead">
        <span className="opener">Let me take you through my</span>
        <h2 className="headliner">EXPERIENCES</h2>
      </div>

      <div className="sectionBody">
        <div className="timeline">
          <div className="timeline-container">
            {sortedTimelineData.map((event, idx) => (
              <TimelineEvent event={event} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ExperiencePage;