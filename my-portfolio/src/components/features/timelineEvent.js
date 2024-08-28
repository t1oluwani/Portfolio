import '../styling/experience.css';

const TimelineEvent = ({event}) => {

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  const sortedSkills = event.skills.sort((a, b) => {
    return a.length - b.length;
  });

  return (
    <div className={`content ${event.category}`}>
      <p className="times">{formatDate(event.start)} - {formatDate(event.end)}</p>
      <p className="location">{event.location}</p>
      <h2 className="organization">{event.organization}</h2>
      <h3 className="title">{event.title}</h3>
      <p className="details">{event.details}</p>
      <div className="skills">
        {sortedSkills.map((skill, idx) => (
          <span className="skill" key={idx}>{skill}</span>
          ))}
        </div>
    </div>
  );
}

export default TimelineEvent;