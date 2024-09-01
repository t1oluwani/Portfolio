import '../styling/project.css';

const ProjectPage = () => {
  return (
    <section id="projects" className="projectpage">
      <div className="sectionHead">
        {/* Title  */}
        <span className="opener">Here are some of my</span>
        <h2 className="headliner">RECENT PROJECTS</h2>
      </div>

      <div className="sectionBody">
        <div className="projects">
          {/* Implement as Owl Carousel */}

          <ul className="projectList">

            <li className="projectItem budget">
              <img alt="" />
              <h3>Budget App</h3>
              <p>This application uses Object Oriented Programming in Java to help provide an overview of an individual's money flow and to assist them in managing it by setting budgets.</p>
              <ul className="skillList">
                <li>Java</li>
                <li>Object-Oriented-Programming</li>
                <li>Intellij</li>
                <li>Application Development</li>
                <li>JUNIT-Testing</li>
                <li>Test-Driven-Developement</li>
                <li>JSON</li>
                <li>Persistence</li>
              </ul>
              <div className="projectButtons">
                {/* <a className="viewbtn" href="" target='blank'>View Live &gt;</a> */}
                <a className="viewbtn" href="https://github.com/t1oluwani/Budget-App" target='blank'>Github Repo &gt;</a>
              </div>
            </li>
            
            <li className="projectItem rest">
              <img alt="" />
              <h3>RESTful API</h3>
              <p>This is a deployed RESTful API for managing employee data. It allows you to perform CRUD (Create, Read, Update, Delete) operations on employee records.</p>
              <ul className="skillList">
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>CRUD</li>
                <li>Insomnia</li>
                <li>Cybera</li>
                <li>Ubuntu</li>
                <li>API-Deployment</li>
              </ul>
              <div className="projectButtons">
                <a className="viewbtn" href="http://[2605:fd00:4:1001:f816:3eff:fe13:b269]/employees" target='blank'>View Live &gt;</a>
                <a className="viewbtn" href="https://github.com/t1oluwani/restfulAPI" target='blank'>Github Repo &gt;</a>
              </div>
            </li>

            <li className="projectItem sprint">
              <img alt="" />
              <h3>Sprint</h3>
              <p>This is a versatile web application designed to streamline Agile and Scrum managing by facilitating efficient tracking and organization of user stories.</p>
              <ul className="skillList">
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>UI/UX</li>
                <li>Sprint Methodologies</li>
                <li>Agile Methodologies</li>
              </ul>
              <div className="projectButtons">
                <a className="viewbtn" href="https://kneadteam.github.io/Sprint/" target='blank'>View Live &gt;</a>
                <a className="viewbtn" href="https://github.com/KneadTeam/Sprint" target='blank'>Github Repo &gt;</a>
              </div>
            </li>

            <li className="projectItem frogg">
              <img alt="" />
              <h3>Froggsite</h3>
              <p>This website is a fun way to display my web-dev skills with HTML and CSS and my knowledge of applications and client-side scripting with Javascript.</p>
              <ul className="skillList">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>UI/UX Principles</li>
                <li>Website Developement</li>
                <li>DOM Manipulation</li>
                <li>Event-Handling</li>
                <li>Animations</li>
                <li>HTML5 Canvas</li>
              </ul>
              <div className="projectButtons">
                <a className="viewbtn" href="https://t1oluwani.github.io/Frogg-site/" target='blank'>View Live &gt;</a>
                <a className="viewbtn" href="https://github.com/t1oluwani/Frogg-site" target='blank'>Github Repo &gt;</a>
              </div>
            </li>

            <li className="projectItem wordgames">
              <img alt="" />
              <h3>Word Games</h3>
              <p>This project features word-guessing games implemented in Python; it offers two popular variants: Hangman and Wordle which use and extend from the same abstract className</p>
              <ul className="skillList">
                <li>Python</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Object-Oriented-Programming</li>
              </ul>
              <div className="projectButtons">
                {/* <a className="viewbtn" href="" target='blank'>View Live &gt;</a> */}
                <a className="viewbtn" href="https://github.com/t1oluwani/Word-Games-App" target='blank'>Github Repo &gt;</a>
              </div>
            </li>

            <li className="projectItem starwars">
              <img alt="" />
              <h3>Star Wars Form</h3>
              <p>This web application provided experience in creating an API and using a 3rd party API, it allows users to submit and retrieve Star Wars related information.</p>
              <ul className="skillList">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>CRUD</li>
                <li>Insomnia</li>
                <li>SWAPI (Star Wars API)</li>
              </ul>
              <div className="projectButtons">
                <a className="viewbtn" href="https://t1oluwani.github.io/StarWarsAPI/" target='blank'>View Live &gt;</a>
                <a className="viewbtn" href="https://github.com/t1oluwani/StarWarsAPI" target='blank'>Github Repo &gt;</a>
              </div>
            </li>

            {/* Working On */}

            {/* <li className="projectItem">
                <img alt=""/>
                <h3>BearMaps</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a className="viewbtn" href="">View Live </a>
                <a className="viewbtn" href="">Github Repo</a>
              </li>

              <li className="projectItem">
                <img alt=""/>
                <h3>Fitness Tracker (Mobile)</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a className="viewbtn" href="">View Live </a>
                <a className="viewbtn" href="">Github Repo</a>
              </li>

              <li className="projectItem">
                <img alt=""/>
                <h3>ML Project</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a className="viewbtn" href="">View Live </a>
                <a className="viewbtn" href="">Github Repo</a>
              </li>

              <li className="projectItem">
                <img alt=""/>
                <h3>AI Project</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a className="viewbtn" href="">View Live </a>
                <a className="viewbtn" href="">Github Repo</a>
              </li> */}

            {/* Low Contribution Group Project  */}

            {/* <li className="projectItem">
                <img alt=""/>
                <h3>Study Circle</h3>
                <p>a web application dedicated to connecting University of Alberta students with compatible study groups. Our app is designed to facilitate seamless collaboration, enhance academic success, and cater to the unique needs of the UAlberta community.</p>
                // <p>Python, Django</p>
                <div className="projectButtons">
                  <a className="viewbtn" href="" target='blank'>View Live &gt;</a>
                  <a className="viewbtn" href="https://github.com/StudyCircleorg/StudyCircle" target='blank'>Github Repo &gt;</a>
                </div>
              </li>

              <li className="projectItem">
                <img alt=""/>
                <h3>Stool (Study Tool)</h3>
                <p>Introducing Stool, a sophisticated Chrome browser extension designed to enhance your video-watching experience on YouTube. With Stool, effortlessly transcribe the content of any YouTube video, seamlessly highlighted in real-time as the video progresses. Elevate your learning or content consumption by posing inquiries directly to OpenAI, tailored to the specifics of the video you're watching. Experience a new level of interaction and accessibility with Stool, transforming your browsing into an enriched, knowledge-driven journey.</p>
                <p>Javascript, Dockerfile, CSS, HTML, Typescript, NodeJS, OpenAI</p>
                <div className="projectButtons">
                  <a className="viewbtn" href="" target='blank'>View Live &gt;</a>
                  <a className="viewbtn" href="https://github.com/team-Diversity/stool" target='blank'>Github Repo &gt;</a>
                </div>
              </li> */}

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
  )
};

export default ProjectPage;