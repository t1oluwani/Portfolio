import './skills.css';

import 
{
    HTML, CSS, JavaScript, Racket, Java, JSON, C, Cpp, VsCode, IntelliJ, Windows, M365, Python, Django, 
    React, Node, Laravel, Linux, Matlab, PHP, PowerShell, R, TypeScript, Insomnia, Pytorch, Express, Git,
} 
from '../assets/logos';

const SkillsPage = () => {
    return (
        <section id="skills" class="skillspage">  
    <div class="sectionHead">
        {/* Title */}
        <span class="opener">Take a look at</span>
        <h2 class="headliner">MY SKILLS</h2>
    </div>

    <div class="sectionBody">
        <div class="skillsCategory">
            <h3>Languages</h3>
            <ul class="skillsGrid">
                {/* HTML */}
                <li>
                    <div class="itemContainer">
                        <img alt="HTML" src={HTML}/>
                        <p>HTML</p>
                    </div>
                </li>
                {/* CSS */}
                <li>
                    <div class="itemContainer">
                        <img alt="CSS" src={CSS}/>
                        <p>CSS</p>
                    </div>
                </li>
                {/* JavaScript */}
                <li>
                    <div class="itemContainer">
                        <img alt="JavaScript" src={JavaScript}/>
                        <p>JavaScript</p>
                    </div>
                </li>
                {/* TypeScript */}
                <li>
                    <div class="itemContainer">
                        <img alt="TypeScript" src={TypeScript}/>
                        <p>TypeScript</p>
                    </div>
                </li>
                {/* Python */}
                <li>
                    <div class="itemContainer">
                        <img alt="Python" src={Python}/>
                        <p>Python</p>
                    </div>
                </li>
                {/* Java */}
                <li>
                    <div class="itemContainer">
                        <img alt="Java" src={Java}/>
                        <p>Java</p>
                    </div>
                </li>
                {/* PHP */}
                <li>
                    <div class="itemContainer">
                        <img alt="PHP" src={PHP}/>
                        <p>PHP</p>
                    </div>
                </li>
                {/* C */}
                <li>
                    <div class="itemContainer">
                        <img alt="C" src={C}/>
                        <p>C</p>
                    </div>
                </li>
                {/* C++ */}
                <li>
                    <div class="itemContainer">
                        <img alt="C++" src={Cpp}/>
                        <p>C++</p>
                    </div>
                </li>
                {/* Racket */}
                <li>
                    <div class="itemContainer">
                        <img alt="Racket" src={Racket}/>
                        <p>Racket</p>
                    </div>
                </li>
                {/* JSON */}
                {/* <li>
                    <div class="itemContainer">
                        <img alt="JSON" src={JSON}/>
                        <p>JSON</p>
                    </div>
                </li> */}
            </ul>
        </div>

        <div class="skillsCategory">
            <h3>Tools</h3>
            <ul class="skillsGrid">
                {/* VS Code */}
                <li>
                    <div class="itemContainer">
                        <img alt="VS Code" src={VsCode}/>
                        <p>VS Code</p>
                    </div>
                </li>
                {/* IntelliJ IDEA */}
                <li>
                    <div class="itemContainer">
                        <img alt="IntelliJ IDEA" src={IntelliJ}/>
                        <p>IntelliJ IDEA</p>
                    </div>
                </li>
                {/* Linux */}
                <li>
                    <div class="itemContainer">
                        <img alt="Linux" src={Linux}/>
                        <p>Linux</p>
                    </div>
                </li>
                {/* Insomnia */}
                <li>
                    <div class="itemContainer">
                        <img alt="Insomnia" src={Insomnia}/>
                        <p>Insomnia</p>
                    </div>
                </li>
                {/* PowerShell */}
                <li>
                    <div class="itemContainer">
                        <img alt="PowerShell" src={PowerShell}/>
                        <p>PowerShell</p>
                    </div>
                </li>
                {/* MATLAB */}
                <li>
                    <div class="itemContainer">
                        <img alt="MATLAB" src={Matlab}/>
                        <p>MATLAB</p>
                    </div>
                </li>
                {/* RStudio */}
                <li>
                    <div class="itemContainer">
                        <img alt="RStudio" src={R}/>
                        <p>RStudio</p>
                    </div>
                </li>
                {/* Pytorch */}
                <li>
                    <div class="itemContainer">
                        <img alt="PyTorch" src={Pytorch}/>
                        <p>PyTorch</p>
                    </div>
                </li>
                {/* Git */}
                <li>
                    <div class="itemContainer">
                        <img alt="GIt" src={Git}/>
                        <p>Git</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="skillsCategory">
            <h3>Frameworks</h3>
            <ul class="skillsGrid">
                {/* NodeJs */}
                <li>
                    <div class="itemContainer">
                        <img alt="NodeJs" src={Node}/>
                        <p>NodeJs</p>
                    </div>
                </li>
                {/* Laravel */}
                <li>
                    <div class="itemContainer">
                        <img alt="Laravel" src={Laravel}/>
                        <p>Laravel</p>
                    </div>
                </li>
                {/* Django */}
                <li>
                    <div class="itemContainer">
                        <img alt="Django" src={Django}/>
                        <p>Django</p>
                    </div>
                </li>
                {/* ReactJS */}
                <li>
                    <div class="itemContainer">
                        <img alt="ReactJS" src={React}/>
                        <p>ReactJS</p>
                    </div>
                </li>
                {/* ExpressJs */}
                <li>
                    <div class="itemContainer">
                        <img alt="ExpressJs" src={Express}/>
                        <p>ExpressJs</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
    )
};

export default SkillsPage;