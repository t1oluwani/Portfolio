import '../styling/experience.css';

const ExperiencePage = () => {
    return (
        <section id="experiences" class="experiencepage">
        <div class="sectionHead">
          {/* Title  */}
          <span class="opener">Let me take you through my</span>
          <h2 class="headliner">EXPERIENCES</h2>
        </div>

        <div class="sectionBody">
          <div class="timeline">
            {/* School Experiences */}
            <div class="timeline-container education">
              <div class="content">
                <p>Sep 2022 - May 2025</p>
                <h2>University of Alberta</h2>
                <p>Bachelor of Science Honors - BS, Computing Science</p>
                <p>Skills: Python, OOP, Version Control, C, GitHub, Data Structures, Git, Docker, Cybera, REST APIs</p>
              </div>
              <div class="content">
                <p>Sep 2020 - April 2022</p>
                <h2>The University of British Columbia</h2>
                <p>Bachelor of Science - BS, CMS</p>
                <p>Skills: R, JSON, OOP, Version Control, C, Racket, GitHub, Java, Data Structures, Git, C++</p>
              </div>
              <div class="content">
                <p>Sep 2018 - Jun 2020</p>
                <h2>International Baccalaureate</h2>
                <p>Grade: Diploma Awarded</p>
                <p>Subjects: English Literature HL, Europe History HL, Physics HL, Japanese SL, Chemistry SL, Mathematics SL</p>
              </div>
              <div class="content">
                <p>Sep 2017 - Jun 2020</p>
                <h2>Harry Ainlay High School</h2>
                <p>High School Diploma</p>
                <p>Grade: Honours</p>
                <p>Activities: Varsity Soccer (2019), Varsity Track (2019-2020), Soccer Club (2017-2020)</p>
                <p>Skills: Client Side Scripting, Leadership, CSS, Design, Japanese, English, HTML, JavaScript, Markup Languages, Critical Thinking</p>
              </div>
            </div>
            {/* Work Experiences */}
            <div class="timeline-container experience">
              <div class="content">
                <p>Jan 2024 - Apr 2024 · 4 mos</p>
                <h2>Knead Technologies</h2>
                <p>Student Software Developer</p>
                <p>Calgary, Alberta, Canada · Remote</p>
                <p>Full Stack Developer; fixed bugs, tested and developed new features for the recipient portal account</p>
                <p>Skills: PHP, Laravel, TypeScript, React.js, MySQL, Docker, PHPUnit, Cypress, wsl, Sprint Planning, Git, GitHub</p>
              </div>
              <div class="content">
                <p>Nov 2022 - Jun 2023 · 8 mos</p>
                <h2>STEM Montessori Academy of Canada</h2>
                <p>Blanket Online Stem Facilitator</p>
                <p>Toronto, Ontario, Canada · Remote</p>
                <p>Virtual Coding Instructor for HTML/CSS, Python, and Math</p>
                <p>Skills: Mathematics, Markup Languages, HTML, JavaScript, Python, Client Side Scripting, CSS, Teaching</p>
              </div>
              <div class="content">
                <p>Jul 2022 - Aug 2022 · 2 mos</p>
                <h2>STEM Montessori Academy of Canada</h2>
                <p>Virtual Summer Stem Facilitator</p>
                <p>Toronto, Ontario, Canada · Remote</p>
                <p>Virtual Coding Instructor for HTML/CSS</p>
                <p>Skills: Markup Languages, HTML, Client Side Scripting, CSS, Teaching</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};

export default ExperiencePage;