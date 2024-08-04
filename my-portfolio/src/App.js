import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './components/home';
import AboutPage from './components/about';
import SkillsPage from './components/skills';
import ProjectPage from './components/project';
import ExperiencePage from './components/experience';
import ContactPage from './components/contact';

import GlowCursor from './components/glowcursor';
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

      </body>
    </div>
  );
}

export default App;
