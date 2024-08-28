import '../styling/experience.css';
import TimelineEvent from '../features/timelineEvent';
import timelineData from '../../assets/experience/timelineData.json'

const ExperiencePage = () => {
  return (
    <section id="experiences" class="experiencepage">
      <div class="sectionHead">
        {/* Title  */}
        <span class="opener">Let me take you through my</span>
        <h2 class="headliner">EXPERIENCES</h2>
      </div>

      <div class="sectionBody">
        <div class="timeline">
          <div class="timeline-container">
            {timelineData.map((event, idx) => (
              <TimelineEvent event={event} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ExperiencePage;