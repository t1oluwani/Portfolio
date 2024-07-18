import './App.css';
import myPicture from './assets/picsofme/option2.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import myResume from './assets/resume/Tioluwani_Akinloye_Resume.pdf';
import {HTML, CSS, JavaScript, Racket, Java, JSON, C, Cpp, VsCode, IntelliJ, Windows, M365, Python, Calendly, Email} from './assets/logos';
// import { turnToX } from './scripts/hamburger';


function App() {
  return (
    <div className="Portfolio">
      <head>
        <title>Tioluwani Akinloye's Portfolio</title>
      </head>

      <body>
        <div>
          {/* Navbar */}
          <div className="navmenu" id="navmenu">
            <ul className="nav-links">
              <li><a className="" href="#home">Home</a></li>
              <li><a className="" href="#about">About</a></li>
              <li><a className="" href="#skills">Skills</a></li>
              <li><a className="" href="#projects">Projects</a></li>
              <li><a className="" href="#experiences">Experiences</a></li>
              <li><a className="" href="#contactme">Contact Me</a></li>
            </ul>
          </div>

          {/* Hamburger menu */}
          {/* <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"> */}
            {/* <div className="hamburger_menu"> */}
            {/* <div className="hamburger_menu" onClick={() => turnToX(this)}> */}
              {/* <div className="topbar"></div> */}
              {/* <div className="midbar"></div> */}
              {/* <div className="botbar"></div> */}
            {/* </div> */}
          {/* </button> */}
        </div>

        {/* Home Section */}
        <section id="home" className="homepage">
          <div>
            {/* Name */}
            <h1 className="name">Tioluwani <br /> God's Favour <br /> Akinloye</h1>
            {/* Short Description */}
            <h2 className="shortdesc">A MULTIDISCIPLINARY DEVELOPER & DESIGNER</h2>
            {/* Mini Bio */}
            <p className="minibio">
              An aspiring full-stack developer with a passion for coding, and a desire to <br />
              create unique, practical and enjoyable user experiences. Building my <br />
              way to a career of Artificial Intelligence, Robotics, and Machine <br />
              Learning. This portfolio displays some of the projects I have worked on, <br />
              the languages I am proficient in, and how to reach me.
            </p>
            {/* Leads to About Page */}
            <button>Get Started</button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="aboutpage">
          <div className="sectionHead">
            {/* Title */}
            <span className="opener">Get to know</span>
            <h2 className="headliner">ABOUT ME</h2>
          </div>
          <div className="sectionBody">
          <img alt="" class="photo" src={myPicture}></img>
            {/* Full Bio */}
            <div className="aboutinfo">
              <p className="bio">
                Hi there! My name is Tioluwani Akinloye, but I normally go by Favour. I am an Honors Computing science student at the University of Alberta. I was born and raised in Nigeria, and have always been fascinated by the potential of technology to change people's lives for the better.
                <br></br><br></br>
                I have developed a strong passion for software development and the application of artificial intelligence and machine learning in advancing this field. I am eager to continue exploring these areas as I progress in my degree. In my free time, I stay active by playing soccer and working out. I also enjoy reading novels and manga, and I have a diverse taste in music and currently, I am even trying to teach myself the piano.
                <br></br><br></br>
                Aside from my academic and personal interests, I am also deeply committed to using my skills and knowledge to make a positive impact in the world. I believe that computer science has the power to solve some of the world's most pressing problems, and I am eager to see how I can become a part of that process.
              </p>

              {/* Add social media icons */}
              <ul class="icons">
                <li><a rel="noopener" href="https://www.linkedin.com/in/tioluwani-akinloye-255a481b7/"
                  target="_blank" class="fa-brands fa-linkedin"></a></li>
                <li><a rel="noopener" href="https://github.com/t1oluwani" 
                  target="_blank" class="fa-brands fa-github"></a></li>
                <li><a rel="noopener" href="mailto:akinloyetioluwani@gmail.com" 
                  target="_blank" class="fa-regular fa-envelope"></a></li>
                <li><a rel="noopener" href="https://www.instagram.com/favour_ak1n"
                  target="_blank" class="fa-brands fa-instagram"></a></li>
                <li><a rel="noopener" className="resume" href={myResume}
                  target="_blank" class="fa-regular fa-file">Resume</a></li>   
                
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
      <section id="skills" class="skillspage">
        <div class="sectionHead">
          {/* Title */}
          <span class="opener">Take a look at</span>
          <h2 class="headliner">MY SKILLS</h2>
        </div>

        <div class="sectionBody">
          <ul class="skillsGrid">
            {/* HTML */}
            <li>
              <div class="itemContainer">
                <img alt="HTML" src={HTML}/>
                <p>HTML</p>
              </div>
            </li>
            {/* CSS */}
            <li>
              <div class="itemContainer">
                <img alt="CSS" src={CSS}/>
                <p>CSS</p>
              </div>
            </li>
            {/* JavaScript */}
            <li>
              <div class="itemContainer">
                <img alt="Javascript" src={JavaScript}/>
                <p>Javascript</p>
              </div>
            </li>
            {/* TypeScript */}
            <li>
              <div class="itemContainer">
                <img alt="Typescript" src={JavaScript}/>
                <p>Typescript</p>
              </div>
            </li>
            {/* Racket */}
            <li>
              <div class="itemContainer">
                <img alt="Racket" src={Racket}/>
                <p>Racket</p>
              </div>
            </li>
            {/* Java */}
            <li>
              <div class="itemContainer">
                <img alt="Java" src={Java}/>
                <p>Java</p>
              </div>
            </li>
            {/* JSON */}
            <li>
              <div class="itemContainer">
                <img alt="JSON" src={JSON}/>
                <p>JSON</p>
              </div>
            </li>
            {/* C */}
            <li>
              <div class="itemContainer">
                <img alt="C" src={C}/>
                <p>C</p>
              </div>
            </li>
            {/* C++ */}
            <li>
              <div class="itemContainer">
                <img alt="C++" src={Cpp}/>
                <p>C++</p>
              </div>
            </li>
            {/* VS Code */}
            <li>
              <div class="itemContainer">
                <img alt="VsCode" src={VsCode}/>
                <p>VS Code</p>
              </div>
            </li>
            {/* IntelliJ IDEA */}
            <li>
              <div class="itemContainer">
                <img alt="IntelliJ" src={IntelliJ}/>
                <p>IntelliJ IDEA</p>
              </div>
            </li>
            {/* Python */}
            <li>
              <div class="itemContainer">
                <img alt="Python" src={Python}/>
                <p>Python</p>
              </div>
            </li>
            {/* PHP */}
            <li>
              <div class="itemContainer">
                <img alt="PHP" src=""/>
                <p>PHP</p>
              </div>
            </li>
            {/* NodeJs */}
            <li>
              <div class="itemContainer">
                <img alt="NodeJs" src=""/>
                <p>NodeJs</p>
              </div>
            </li>
            {/* Laravel */}
            <li>
              <div class="itemContainer">
                <img alt="Laravel" src=""/>
                <p>Laravel</p>
              </div>
            </li>
            {/* Django */}
            <li>
              <div class="itemContainer">
                <img alt="Django" src=""/>
                <p>Django</p>
              </div>
            </li>
            {/* ReactJS */}
            <li>
              <div class="itemContainer">
                <img alt="ReactJS" src=""/>
                <p>ReactJS</p>
              </div>
            </li>
            {/* Linux */}
            <li>
              <div class="itemContainer">
                <img alt="Linux" src=""/>
                <p>Linux</p>
              </div>
            </li>
            {/* Insomnia */}
            <li>
              <div class="itemContainer">
                <img alt="Insomnia" src=""/>
                <p>Insomnia</p>
              </div>
            </li>
            {/* Powershell */}
            <li>
              <div class="itemContainer">
                <img alt="Powershell" src=""/>
                <p>Powershell</p>
              </div>
            </li>
            {/* ExpressJs */}
            <li>
              <div class="itemContainer">
                <img alt="ExpressJs" src=""/>
                <p>ExpressJs</p>
              </div>
            </li>
            {/* MATLAB */}
            <li>
              <div class="itemContainer">
                <img alt="MATLAB" src=""/>
                <p>MATLAB</p>
              </div>
            </li>
            {/* PyTorch */}
            <li>
              <div class="itemContainer">
                <img alt="PyTorch" src=""/>
                <p>PyTorch</p>
              </div>
            </li>
            {/* RStudio */}
            <li>
              <div class="itemContainer">
                <img alt="RStudio" src=""/>
                <p>RStudio</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" class="projectpage">
        <div class="sectionHead">
          {/* Title  */}
          <span class="opener">Here are some of my</span>
          <h2 class="headliner">RECENT PROJECTS</h2>
        </div>

        <div class="sectionBody">
          <div class="projects">
            {/* Implement as Owl Carousel */}

            <ul>

              <li>
                <img alt=""/>
                <h3>Budget App</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Froggsite</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Word Games</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Study Circle</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Stool (Study Tool)</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Sprint</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Web Project</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>
              <li>
                <img alt=""/>
                <h3>RESTful API</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Star Wars (3rd Party API)</h3>
                <a>View Live</a>
                <a>Github Repo</a>
              </li>

            </ul>

            {/* <!-- Virtual Assistant -->
            <!-- Tic-tac-toe -->
            <!-- Pong -->
            <!-- Moderate Paint -->
            <!-- Photo Editor Lite -->
            <!-- Snake -->
            <!-- etc --> */}
          </div>
        </div>

      </section>

      {/* Experiences */}
      <section id="experiences" class="experiencepage">
        <div class="sectionHead">
          {/* Title  */}
          <span class="opener">Let me take you through my</span>
          <h2 class="headliner">EXPERIENCES</h2>
        </div>

        <div class="sectionBody">

        </div>
      </section>

      {/* Contact */}
      <section id="contactme" class="contactpage">
        <div class="sectionHead">
          {/* Title */}
          <span class="opener">Feel free to</span>
          <h2 class="headliner">CONTACT ME</h2>
        </div>

        <div class="sectionBody">
          {/* Email  */}
          <img alt="" src={Email}/>
          <a rel="noopener" href="mailto:akinloyetioluwani@gmail.com" target="_blank"
            class="contactLink">akinloyetioluwani@gmail.com</a>
          <p>You could email me directly</p>

          <h1>OR</h1>

          {/* Calendly  */}
          <img alt="" src={Calendly}/>
          <a rel="noopener" href="https://calendly.com/akinloyetioluwani" target="_blank"
            class="contactLink">Calendly</a>
          <p>Schedule a virtual meeting with me </p>

          {/* Contact Form   */}
          <h2>Contact Form</h2>
          <form id="contactForm" action method>
            {/* Name Input */}
            <input type="text" id="nameInput" class="nameInput" required
              placeholder="Input Name*" />
            {/* Phone Input (make optional) */}
              <input type="tel"   id="phoneInput"   class="phoneInput"   required placeholder="Input Number"/>
            {/* Email Input  */}
            <input type="email" id="emailInput" class="emailInput" required
              placeholder="Input Email*" />
            {/* Subject Input  */}
            <input type="text" id="subjectInput" class="subjectInput" required
              placeholder="Input Subject*" />
            {/* Message Input  */}
            <textarea rows="5" id="messageInput" class="messageInput" required
              placeholder="Input Message*"></textarea>
          </form>
          <button>Reach Out</button>
        </div>

      </section>

        {/* Copyright Footer */}
        <footer>
          <p>&copy; TIOLUWANI AKINLOYE 2022</p>
        </footer>

      </body>
    </div>
  );
}

export default App;
