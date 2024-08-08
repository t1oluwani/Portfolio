import '../styling/skills.css';
import SkillSlider from '../features/skillSlider';

const SkillsPage = () => {
    return (
        <section id="skills" class="skillspage">  
            <div class="sectionHead">
                {/* Title */}
                <span class="opener">Take a look at</span>
                <h2 class="headliner">MY SKILLS</h2>
            </div>

            <div class="sectionBody">
                <SkillSlider />
            </div>
        </section>
    )
};

export default SkillsPage;