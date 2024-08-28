import '../styling/experience.css';

const TimelineEvent = ({event}) => {

  console.log(event);

  // const event =
  // {
  //   "category": "education",
  //   "start": "Sep 2017",
  //   "end": "Jun 2020",
  //   "organization": "Harry Ainlay Composite High School",
  //   "title": "High School Diploma with Honours & IB Diploma",
  //   "location": "Edmonton, Alberta, Canada",
  //   "details": "Distinguised Service Award, Honors Award, IB Diploma Programme",
  //   "skills": "Client Side Scripting, Leadership, CSS, Design, Japanese, English, HTML, JavaScript, Markup Languages, Critical Thinking"
  // }

  return (
    <div className={`content ${event.category}`}>
      <p className="times">{event.start} - {event.end}</p>
      <p className="location">{event.location}</p>
      <h2 className="organization">{event.organization}</h2>
      <h3 className="title">{event.title}</h3>
      <p className="details">{event.details}</p>
      <p className="skills">{event.skills}</p>
    </div>
  );
}

export default TimelineEvent;