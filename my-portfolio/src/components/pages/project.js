import '../styling/project.css';

const ProjectPage = () => {
    return (
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

              <li class="projectItem">
                <img alt=""/>
                <h3>Budget App</h3>
                <p>This application uses Object Oriented Programming in Java to help provide an overview of an individuals money flow and to assist them in managing it by setting budgets.</p>
                {/* <h5>Skills:</h5>
                <p>Java, Object-Oriented Programming, Intellij, Application Development, JUNIT testing, Test driven development, JSON Persistence</p> */}
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="https://github.com/t1oluwani/Budget-App">Github Repo</a>
              </li>

              <li class="projectItem">
                <img alt=""/>
                <h3>Froggsite</h3>
                <p>This website is a fun way to display my web-dev skills with HTML and CSS and my knowledge of applications and client-side scripting with Javascript. </p>
                {/* <h5>Skills:</h5>
                <p>HTML, CSS, Javascript, Web Development</p> */}
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="https://github.com/t1oluwani/Frogg-site">Github Repo</a>
              </li>

              <li class="projectItem">
                <img alt=""/>
                <h3>Word Games</h3>
                <p>...</p>
                {/* <h5>Skills:</h5>
                <p>Python, Object Oriented Programming, Polymorphism</p> */}
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="https://github.com/t1oluwani/Word-Games-App">Github Repo</a>
              </li>

              {/* <li class="projectItem">
                <img alt=""/>
                <h3>Study Circle</h3>
                <p>a web application dedicated to connecting University of Alberta students with compatible study groups. Our app is designed to facilitate seamless collaboration, enhance academic success, and cater to the unique needs of the UAlberta community.</p>
                <h5>Skills:</h5>
                // <p>Python, Django</p>
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="https://github.com/StudyCircleorg/StudyCircle">Github Repo</a>
              </li>

              <li class="projectItem">
                <img alt=""/>
                <h3>Stool (Study Tool)</h3>
                <p>Introducing Stool, a sophisticated Chrome browser extension designed to enhance your video-watching experience on YouTube. With Stool, effortlessly transcribe the content of any YouTube video, seamlessly highlighted in real-time as the video progresses. Elevate your learning or content consumption by posing inquiries directly to OpenAI, tailored to the specifics of the video you're watching. Experience a new level of interaction and accessibility with Stool, transforming your browsing into an enriched, knowledge-driven journey.</p>
                <h5>Skills:</h5>
                <p>Javascript, Dockerfile, CSS, HTML, Typescript, NodeJS, OpenAI</p>
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="https://github.com/team-Diversity/stool">Github Repo</a>
              </li> */}

              <li class="projectItem">
                <img alt=""/>
                <h3>Sprint</h3>
                <p>This is a versatile web application designed to streamline Agile and Scrum managing by facilitating efficient tracking and organization of user stories.</p>
                {/* <h5>Skills:</h5>
                <p>HTML, CSS, Python, Javascript, UI/UX, Sprint/Agile Methodologies</p> */}
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="https://github.com/KneadTeam/Sprint">Github Repo</a>
              </li>
              
              <li class="projectItem">
                <img alt=""/>
                <h3>RESTful API</h3>
                <p>This is a deployed RESTful API for managing employee data. It allows you to perform CRUD (Create, Read, Update, Delete) operations on employee records. </p>
                {/* <h5>Skills:</h5>
                <p>JavaScript, NodeJS, ExpressJS, CRUD, Insomnia, Cybera Instances, API Deployement, MongoDB, Mongoose</p> */}
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="https://github.com/t1oluwani/restfulAPI">Github Repo</a>
              </li>

              <li class="projectItem">
                <img alt=""/>
                <h3>Star Wars (3rd Party API)</h3>
                <p>This web application provided experience in creating an API and using a 3rd party API, it allows users to submit and retreive star wars related information.</p>
                {/* <h5>Skills:</h5> */}
                {/* <p>JavaScript, NodeJS, ExpressJS, CRUD, Insomnia, Third Party API, MongoDB, Mongoose, HTML, CSS, Fetch API, SWAPI (Star Wars API)</p> */}
                <a class="viewbtn" href="">View Live  </a>
                <a class="viewbtn" href="">Github Repo</a>
              </li>

              {/* Working On */}

              {/* <li class="projectItem">
                <img alt=""/>
                <h3>BearMaps</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="">Github Repo</a>
              </li>

              <li class="projectItem">
                <img alt=""/>
                <h3>Fitness Tracker (Mobile)</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="">Github Repo</a>
              </li>

              <li class="projectItem">
                <img alt=""/>
                <h3>ML Project</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="">Github Repo</a>
              </li>

              <li class="projectItem">
                <img alt=""/>
                <h3>AI Project</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a class="viewbtn" href="">View Live </a>
                <a class="viewbtn" href="">Github Repo</a>
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