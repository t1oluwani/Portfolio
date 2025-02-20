import '../styling/experience.css';

const TimelineEvent = ({ event, hasBeenSeen }) => {
  const slideAnimation =
    event.category === "education" ? (hasBeenSeen ? 'slideMLAnimation' : '') 
    : event.category === "experience" ? (hasBeenSeen ? 'slideMRAnimation' : '') 
    : '';
    
  console.log("TimelineEvent HasBeenSeen: ", hasBeenSeen);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  const sortedSkills = event.skills.sort((a, b) => {
    return a.length - b.length; // Sort by length of string (shortest first)
  });

  return (
    <div className={`content ${event.category} ${slideAnimation}`}>
      <p className="times">{formatDate(event.start)} - {event.end ? formatDate(event.end) : "Present"}</p>
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