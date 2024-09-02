import '../styling/skills.css';
import SkillSlider from '../features/skillSlider';

const SkillsPage = () => {
    return (
        <section id="skills" className="skillspage">  
            <div className="sectionHead">
                <span className="opener">Take a look at</span>
                <h2 className="headliner">MY SKILLS</h2>
            </div>

            <div className="sectionBody">
                <SkillSlider />
            </div>
        </section>
    )
};

export default SkillsPage;