import './App.css';
import myPicture from './assets/picsofme/option2.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import myResume from './assets/resume/Tioluwani_Akinloye_Resume.pdf';
import {
  HTML, CSS, JavaScript, Racket, Java, JSON, C, Cpp, VsCode, IntelliJ, Windows, M365, Python, Calendly, Email,
  Django, React, Node, Laravel, Linux, Matlab, PHP, PowerShell, R, TypeScript, Insomnia, Pytorch, Express, Git,
} from './assets/logos';
import HamburgerMenu from './components/hamburgermenu';
import GlowCursor from './components/glowcursor';


function App() {
  return (
    <div className="Portfolio">
      <head>
        <title>Tioluwani Akinloye's Portfolio</title>
      </head>

      {/* <TurnToX /> */}
      <GlowCursor />

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

          <HamburgerMenu />

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
        <div class="skillsCategory">
            <h3>Languages</h3>
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
                        <img alt="JavaScript" src={JavaScript}/>
                        <p>JavaScript</p>
                    </div>
                </li>
                {/* TypeScript */}
                <li>
                    <div class="itemContainer">
                        <img alt="TypeScript" src={TypeScript}/>
                        <p>TypeScript</p>
                    </div>
                </li>
                {/* Python */}
                <li>
                    <div class="itemContainer">
                        <img alt="Python" src={Python}/>
                        <p>Python</p>
                    </div>
                </li>
                {/* Java */}
                <li>
                    <div class="itemContainer">
                        <img alt="Java" src={Java}/>
                        <p>Java</p>
                    </div>
                </li>
                {/* PHP */}
                <li>
                    <div class="itemContainer">
                        <img alt="PHP" src={PHP}/>
                        <p>PHP</p>
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
                {/* Racket */}
                <li>
                    <div class="itemContainer">
                        <img alt="Racket" src={Racket}/>
                        <p>Racket</p>
                    </div>
                </li>
                {/* JSON */}
                {/* <li>
                    <div class="itemContainer">
                        <img alt="JSON" src={JSON}/>
                        <p>JSON</p>
                    </div>
                </li> */}
            </ul>
        </div>

        <div class="skillsCategory">
            <h3>Tools</h3>
            <ul class="skillsGrid">
                {/* VS Code */}
                <li>
                    <div class="itemContainer">
                        <img alt="VS Code" src={VsCode}/>
                        <p>VS Code</p>
                    </div>
                </li>
                {/* IntelliJ IDEA */}
                <li>
                    <div class="itemContainer">
                        <img alt="IntelliJ IDEA" src={IntelliJ}/>
                        <p>IntelliJ IDEA</p>
                    </div>
                </li>
                {/* Linux */}
                <li>
                    <div class="itemContainer">
                        <img alt="Linux" src={Linux}/>
                        <p>Linux</p>
                    </div>
                </li>
                {/* Insomnia */}
                <li>
                    <div class="itemContainer">
                        <img alt="Insomnia" src={Insomnia}/>
                        <p>Insomnia</p>
                    </div>
                </li>
                {/* PowerShell */}
                <li>
                    <div class="itemContainer">
                        <img alt="PowerShell" src={PowerShell}/>
                        <p>PowerShell</p>
                    </div>
                </li>
                {/* MATLAB */}
                <li>
                    <div class="itemContainer">
                        <img alt="MATLAB" src={Matlab}/>
                        <p>MATLAB</p>
                    </div>
                </li>
                {/* RStudio */}
                <li>
                    <div class="itemContainer">
                        <img alt="RStudio" src={R}/>
                        <p>RStudio</p>
                    </div>
                </li>
                {/* Pytorch */}
                <li>
                    <div class="itemContainer">
                        <img alt="PyTorch" src={Pytorch}/>
                        <p>PyTorch</p>
                    </div>
                </li>
                {/* Git */}
                <li>
                    <div class="itemContainer">
                        <img alt="GIt" src={Git}/>
                        <p>Git</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="skillsCategory">
            <h3>Frameworks</h3>
            <ul class="skillsGrid">
                {/* NodeJs */}
                <li>
                    <div class="itemContainer">
                        <img alt="NodeJs" src={Node}/>
                        <p>NodeJs</p>
                    </div>
                </li>
                {/* Laravel */}
                <li>
                    <div class="itemContainer">
                        <img alt="Laravel" src={Laravel}/>
                        <p>Laravel</p>
                    </div>
                </li>
                {/* Django */}
                <li>
                    <div class="itemContainer">
                        <img alt="Django" src={Django}/>
                        <p>Django</p>
                    </div>
                </li>
                {/* ReactJS */}
                <li>
                    <div class="itemContainer">
                        <img alt="ReactJS" src={React}/>
                        <p>ReactJS</p>
                    </div>
                </li>
                {/* ExpressJs */}
                <li>
                    <div class="itemContainer">
                        <img alt="ExpressJs" src={Express}/>
                        <p>ExpressJs</p>
                    </div>
                </li>
            </ul>
        </div>
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

            <ul class="projectList">

              <li>
                <img alt=""/>
                <h3>Budget App</h3>
                <p>This application is designed to help give an overview of an individuals money flow and to assist them in managing it. This application should be free for anyone to use, however its intended audience is primarily young adults, who are often just getting a stable source of income for the first time. The application is designed to be simple and easy to use, while at the same time having multiple uses and being very effective at what it does. </p>
                <h5>Skills:</h5>
                <p>Java, Object-Oriented Programming, Intellij, Application Development, JUNIT testing, Test driven development, JSON Persistence</p>
                <a href="">View Live </a>
                <a href="https://github.com/t1oluwani/Budget-App">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Froggsite</h3>
                <p>This website is a fun way to displayed my web-dev skills with HTML and CSS and my knowledge of applications and client-side scripting with Javascript. This application should be free for anyone to use, however its intended audience is primarily teens and pre-teens. This project was of intrest to me, as it was my first ever coding project and was one i did in high-school, now that I have an increase amount coding knowledge, I was looking to apply concepts and practices I have picked up learning and workign with other languages and see if those skills are transferable.</p>
                <h5>Skills:</h5>
                <p>HTML, CSS, Javascript, Web Development</p>
                <a href="">View Live </a>
                <a href="https://github.com/t1oluwani/Frogg-site">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Word Games</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a href="">View Live </a>
                <a href="https://github.com/t1oluwani/Word-Games-App">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Study Circle</h3>
                <p>a web application dedicated to connecting University of Alberta students with compatible study groups. Our app is designed to facilitate seamless collaboration, enhance academic success, and cater to the unique needs of the UAlberta community.</p>
                <h5>Skills:</h5>
                <p>Python, Django</p>
                <a href="">View Live </a>
                <a href="https://github.com/StudyCircleorg/StudyCircle">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Stool (Study Tool)</h3>
                <p>Introducing Stool, a sophisticated Chrome browser extension designed to enhance your video-watching experience on YouTube. With Stool, effortlessly transcribe the content of any YouTube video, seamlessly highlighted in real-time as the video progresses. Elevate your learning or content consumption by posing inquiries directly to OpenAI, tailored to the specifics of the video you're watching. Experience a new level of interaction and accessibility with Stool, transforming your browsing into an enriched, knowledge-driven journey.</p>
                <h5>Skills:</h5>
                <p>Javascript, Dockerfile, CSS, HTML, Typescript, NodeJS, OpenAI</p>
                <a href="">View Live </a>
                <a href="https://github.com/team-Diversity/stool">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Sprint</h3>
                <p>Sprint is a versatile web application designed to streamline and enhance the management of user stories during software development. Tailored for Agile and Scrum methodologies, Sprint facilitates efficient tracking and organization of user stories, allowing for seamless project and product management. Sprint was created in hope to help teams achieve optimal productivity in implementing software, fostering a dynamic and organized approach to Agile and Scrum product management.</p>
                <h5>Skills:</h5>
                <p>HTML, CSS, Python, Javascript, UI/UX, Sprint/Agile Methodologies</p>
                <a href="">View Live </a>
                <a href="https://github.com/KneadTeam/Sprint">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Web Project</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a href="">View Live </a>
                <a href="">Github Repo</a>
              </li>
              <li>
                <img alt=""/>
                <h3>RESTful API</h3>
                <p>This is a simple deployed REST API built using Node.js, Express.js for managing employee data. It allows you to perform CRUD (Create, Read, Update, Delete) operations on employee records stored in a MongoDB database. Additionally, it provides API documentation using the OpenAPI specification.</p>
                <h5>Skills:</h5>
                <p>JavaScript, NodeJS, ExpressJS, CRUD, Insomnia, Cybera Instances, API Deployement, MongoDB</p>
                <a href="">View Live </a>
                <a href="https://github.com/t1oluwani/restfulAPI">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Star Wars (3rd Party API)</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>JavaScript, NodeJS, ExpressJS, CRUD, Insomnia, Third Party API, MongoDB, HTML, CSS</p>
                <a href="">View Live  </a>
                <a href="">Github Repo</a>
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
          <div class="timeline">
            {/* School Experiences */}
            <div class="timeline-container education">
              <div class="content">
                <p>Sep 2022 - May 2025</p>
                <h2>University of Alberta</h2>
                <p>Bachelor of Science Honors - BS, Computing Science</p>
                <p>Skills: Python, OOP, Version Control, C, GitHub, Data Structures, Git, Docker, Cybera, REST APIs</p>
              </div>
              <div class="content">
                <p>Sep 2020 - April 2022</p>
                <h2>The University of British Columbia</h2>
                <p>Bachelor of Science - BS, CMS</p>
                <p>Skills: R, JSON, OOP, Version Control, C, Racket, GitHub, Java, Data Structures, Git, C++</p>
              </div>
              <div class="content">
                <p>Sep 2018 - Jun 2020</p>
                <h2>International Baccalaureate</h2>
                <p>Grade: Diploma Awarded</p>
                <p>Subjects: English Literature HL, Europe History HL, Physics HL, Japanese SL, Chemistry SL, Mathematics SL</p>
              </div>
              <div class="content">
                <p>Sep 2017 - Jun 2020</p>
                <h2>Harry Ainlay High School</h2>
                <p>High School Diploma</p>
                <p>Grade: Honours</p>
                <p>Activities: Varsity Soccer (2019), Varsity Track (2019-2020), Soccer Club (2017-2020)</p>
                <p>Skills: Client Side Scripting, Leadership, CSS, Design, Japanese, English, HTML, JavaScript, Markup Languages, Critical Thinking</p>
              </div>
            </div>
            {/* Work Experiences */}
            <div class="timeline-container experience">
              <div class="content">
                <p>Jan 2024 - Apr 2024 · 4 mos</p>
                <h2>Knead Technologies</h2>
                <p>Student Software Developer</p>
                <p>Calgary, Alberta, Canada · Remote</p>
                <p>Full Stack Developer; fixed bugs, tested and developed new features for the recipient portal account</p>
                <p>Skills: PHP, Laravel, TypeScript, React.js, MySQL, Docker, PHPUnit, Cypress, wsl, Sprint Planning, Git, GitHub</p>
              </div>
              <div class="content">
                <p>Nov 2022 - Jun 2023 · 8 mos</p>
                <h2>STEM Montessori Academy of Canada</h2>
                <p>Blanket Online Stem Facilitator</p>
                <p>Toronto, Ontario, Canada · Remote</p>
                <p>Virtual Coding Instructor for HTML/CSS, Python, and Math</p>
                <p>Skills: Mathematics, Markup Languages, HTML, JavaScript, Python, Client Side Scripting, CSS, Teaching</p>
              </div>
              <div class="content">
                <p>Jul 2022 - Aug 2022 · 2 mos</p>
                <h2>STEM Montessori Academy of Canada</h2>
                <p>Virtual Summer Stem Facilitator</p>
                <p>Toronto, Ontario, Canada · Remote</p>
                <p>Virtual Coding Instructor for HTML/CSS</p>
                <p>Skills: Markup Languages, HTML, Client Side Scripting, CSS, Teaching</p>
              </div>
            </div>
          </div>
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
              <input type="tel"   id="phoneInput"   class="phoneInput" required placeholder="Input Number"/>
            {/* Email Input  */}
            <input type="email" id="emailInput" class="emailInput" required
              placeholder="Input Email*" />
            {/* Subject Input  */}
            <input type="text" id="subjectInput" class="subjectInput" required
              placeholder="Input Subject*" />
            {/* Message Input  */}
            <textarea rows="5" id="messageInput" class="messageInput" required
              placeholder="Input Message*"></textarea>
            {/* Submit Button  */}
            <button>Reach Out</button>
          </form>
          
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
