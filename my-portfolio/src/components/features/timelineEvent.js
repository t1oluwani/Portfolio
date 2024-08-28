import '../styling/experience.css';

// const TimelineEvent = (event) => {
const TimelineEvent = () => {

  const testEvent = 
  {
    "category": "education",
    "start": "Sep 2017",
    "end": "Jun 2020",
    "organization": "Harry Ainlay Composite High School",
    "title": "High School Diploma with Honours & IB Diploma",
    "location": "Edmonton, Alberta, Canada",
    "details": "Distinguised Service Award, Honors Award, IB Diploma Programme",
    "skills": "Client Side Scripting, Leadership, CSS, Design, Japanese, English, HTML, JavaScript, Markup Languages, Critical Thinking"
  }

  return (
    <div className={`content ${testEvent.category}`}>
      <p>{testEvent.start} - {testEvent.end}</p>
      <p>{testEvent.location}</p>
      <h2>{testEvent.organization}</h2>
      <h3>{testEvent.title}</h3>
      <p>{testEvent.details}</p>
      <p>{testEvent.skills}</p>
    </div>
  );
}

export default TimelineEvent;