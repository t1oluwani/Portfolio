import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import SkillsPage from './components/pages/skills';
import ProjectPage from './components/pages/project';
import ExperiencePage from './components/pages/experience';
import ContactPage from './components/pages/contact';

import Blur from './components/features/blurs';
import GlowCursor from './components/features/glowcursor';
import NavigationBar from './components/features/navbar';
import StarryNight from './components/features/starryNight';

function App() {
  return (
    <div className="Portfolio" id='Portfolio'>
      <Blur />
      <StarryNight />
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
        <p>&copy; TIOLUWANI AKINLOYE 2024</p>
      </footer>
    </div>
  );
}

export default App;
