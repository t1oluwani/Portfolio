import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import SkillsPage from './components/pages/skills';
import ProjectPage from './components/pages/project';
import ExperiencePage from './components/pages/experience';
import ContactPage from './components/pages/contact';

import GlowCursor from './components/features/glowcursor';
import NavigationBar from './components/navbar';



function App() {
  return (
    <div className="Portfolio">
      <head>
        <title>Tioluwani Akinloye's Portfolio</title>
      </head>

      <body>
        
        <GlowCursor />
        <NavigationBar />

        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectPage />
        <ExperiencePage />
        <ContactPage />

        {/* Copyright Footer */}
        <footer>
          <p>&copy; TIOLUWANI AKINLOYE 2022</p>
        </footer>

      <div className= "blur1" />
      <div className= "blur2" />
      <div className= "blur3" />
      <div className= "blur4" />
      <div className= "blur5" />
      <div className= "blur6" />
      <div className= "blur7" />
      <div className= "blur8" />
      <div className= "blur9" />
      <div className= "blur10" />
      <div className= "blur11" />
      <div className= "blur12" />
      <div className= "blur13" />
      <div className= "blur14" />
      <div className= "blur15" />

      </body>
    </div>
  );
}

export default App;
