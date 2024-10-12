import '../styling/experience.css';

const TimelineEvent = ({ event, isVisible }) => {
  const slideAnimation =
    event.category === "education" ? (isVisible ? 'slideLAnimation' : '') 
    : event.category === "experience" ? (isVisible ? 'slideRAnimation' : '') 
    : '';

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  const sortedSkills = event.skills.sort((a, b) => {
    return a.length - b.length;
  });

  return (
    <div className={`content ${event.category} ${slideAnimation}`}>
      <p className="times">{formatDate(event.start)} - {formatDate(event.end)}</p>
      <p className="location">{event.location}</p>
      <h2 className="organization">{event.organization}</h2>
      <h3 className="title">{event.title}</h3>
      {event.details && <p className="details">{event.details}</p>}
      <div className="skills">
        {sortedSkills.map((skill, idx) => (
          <span className="skill" key={idx}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default TimelineEvent;