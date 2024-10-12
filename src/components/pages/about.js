import '../styling/about.css';
import { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import myPicture from '../../assets/picsofme/option2.jpg';
import myResume from '../../assets/resume/Tioluwani_Akinloye_Resume.pdf';

const AboutPage = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const slideLAnimation = isVisible ? 'slideLAnimation' : '';
  const slideRAnimation = isVisible ? 'slideRAnimation' : '';

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
    <section id="about" className="aboutpage" ref={sectionRef}>
      <div className="sectionHead">
        <span className="opener">Get to know</span>
        <h2 className="headliner">ABOUT ME</h2>
      </div>

      <div className="sectionBody">
        <img
          alt="Picture of Me"
          className={`photo ${slideLAnimation}`}
          src={myPicture}>
        </img>

        <div className="aboutinfo">
          <p className={`bio ${slideLAnimation}`}>
            Hi there! 👋🏾 My name is Tioluwani Akinloye, but I usually go by Tio or Favour. I’m an Honors Computing Science student at the University of Alberta, with roots in both Nigeria, where I was born, and Canada, where I was raised. My fascination with technology’s potential to transform lives has driven my passion for software development.
            <br></br><br></br>
            I am particularly interested in software development and the applications of artificial intelligence and machine learning within this field. I look forward to diving deeper into these areas as I continue my studies. Outside of academics, I stay active by playing soccer and working out. I also enjoy reading novels, exploring manga, and expressing my creativity through art.
            <br></br><br></br>
            Alongside my personal interests, I am deeply committed to using my skills and knowledge to make a positive impact on the world. I believe that computer science holds the key to solving some of the world’s most pressing challenges, and I am eager to see how I can be a part of that process.
          </p>

          {/* Add social media icons */}
          <ul className={`icons ${slideRAnimation}`}>
            <li><a href="https://www.linkedin.com/in/tioluwani-akinloye-255a481b7/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/t1oluwani" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="mailto:akinloyetioluwani@gmail.com" target="_blank" rel="noreferrer"><i className="fa-regular fa-envelope"></i></a></li>
            <li><a href="https://www.instagram.com/fav_ak1n" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href={myResume} target="_blank" rel="noreferrer"><i className="fa-regular fa-file"></i>Resume</a></li>
          </ul>

        </div>
      </div>
    </section>
  )
};

export default AboutPage;