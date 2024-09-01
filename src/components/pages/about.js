import '../styling/about.css';

import myPicture from '../../assets/picsofme/option2.jpg';
import myResume from '../../assets/resume/Tioluwani_Akinloye_Resume.pdf';

const AboutPage = () => {
  return (
    <section id="about" className="aboutpage">
      <div className="sectionHead">
        {/* Title */}
        <span className="opener">Get to know</span>
        <h2 className="headliner">ABOUT ME</h2>
      </div>
      <div className="sectionBody">
        <img alt="" className="photo" src={myPicture}></img>
        <div className="aboutinfo">
          <p className="bio">
            Hi there!👋🏾 My name is Tioluwani Akinloye, but I normally go by Tio or Favour. I am an Honors Computing Science student at the University of Alberta. Born in Nigeria and raised in Canada, I have always been fascinated by the potential of technology to change people's lives.
            <br></br><br></br>
            I have developed a strong passion for software development and the application of artificial intelligence and machine learning in advancing this field. I am eager to continue exploring these areas as I progress in my degree. In my free time, I stay active by playing soccer and working out. I also enjoy reading novels and manga, and I have a diverse taste in music. Currently, I am even teaching myself the piano.
            <br></br><br></br>
            Aside from my academic and personal interests, I am deeply committed to using my skills and knowledge to make a positive impact in the world. I believe that computer science has the power to solve some of the world's most pressing problems, and I am eager to see how I can be a part of that process.
          </p>

          {/* Add social media icons */}
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/tioluwani-akinloye-255a481b7/" target="_blank" rel="noreferrer" className="fa-brands fa-linkedin"> </a></li>
            <li><a href="https://github.com/t1oluwani" target="_blank" rel="noreferrer" className="fa-brands fa-github"> </a></li>
            <li><a href="mailto:akinloyetioluwani@gmail.com" target="_blank" rel="noreferrer" className="fa-regular fa-envelope"> </a></li>
            <li><a href="https://www.instagram.com/favour_ak1n" target="_blank" rel="noreferrer" className="fa-brands fa-instagram"> </a></li>
            <li><a href={myResume} target="_blank" rel="noreferrer" className="fa-regular fa-file">Resume</a></li>

          </ul>
        </div>
      </div>
    </section>
  )
};

export default AboutPage;