import '../styling/home.css';

const HomePage = () => {
    return (
        <section id="home" className="homepage">
          <div className='homebubble'>

            <h1 className="name">Tioluwani <br /> God's Favour <br /> Akinloye</h1>

            <h2 className="shortdesc">A MULTIDISCIPLINARY DEVELOPER & DESIGNER</h2>

            <p className="minibio">
              An aspiring full-stack developer with a passion for coding, and a desire to 
              create unique, practical and enjoyable user experiences. Building my 
              way to a career of Artificial Intelligence, Robotics, and Machine
              Learning. This portfolio displays some of the projects I have worked on,
              the languages I am proficient in, and how to reach me.
            </p>

            <a href='#about'><button>Get Started</button></a>
            
          </div>
        </section>
    )
};

export default HomePage;
