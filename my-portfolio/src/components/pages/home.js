import '../styling/home.css';

const HomePage = () => {
    return (
        <section id="home" className="homepage">
          <div className='homebubble'>
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
            <a href='#about'><button>Get Started</button></a>
          </div>
        </section>
    )
};

export default HomePage;
