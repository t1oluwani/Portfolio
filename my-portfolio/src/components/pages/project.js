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
                <p>Python, Object Oriented Programming, Polymorphism</p>
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
                <h3>RESTful API</h3>
                <p>This is a simple deployed REST API built using Node.js, Express.js for managing employee data. It allows you to perform CRUD (Create, Read, Update, Delete) operations on employee records stored in a MongoDB database. Additionally, it provides API documentation using the OpenAPI specification.</p>
                <h5>Skills:</h5>
                <p>JavaScript, NodeJS, ExpressJS, CRUD, Insomnia, Cybera Instances, API Deployement, MongoDB, Mongoose</p>
                <a href="">View Live </a>
                <a href="https://github.com/t1oluwani/restfulAPI">Github Repo</a>
              </li>

              <li>
                <img alt=""/>
                <h3>Star Wars (3rd Party API)</h3>
                <p>This project is a web application that I used to gain experience in both creating an API and using a 3rd party API, it allows users to submit a form with their favorite Star Wars character information and retrieve character details from the Star Wars API (SWAPI). The backend is built with Node.js and Express, and MongoDB is used to store form submissions.</p>
                <h5>Skills:</h5>
                <p>JavaScript, NodeJS, ExpressJS, CRUD, Insomnia, Third Party API, MongoDB, Mongoose, HTML, CSS, Fetch API
                SWAPI (Star Wars API)</p>
                <a href="">View Live  </a>
                <a href="">Github Repo</a>
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
                <h3>Fitness Tracker (Mobile)</h3>
                <p>...</p>
                <h5>Skills:</h5>
                <p>...</p>
                <a href="">View Live </a>
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
    )
};

export default ProjectPage;