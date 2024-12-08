import '../styling/skills.css';

import {
  HTML, CSS, JavaScript, Racket, Java, C, Cpp, VsCode, IntelliJ, Python, Django, React, Node, Laravel, Linux, 
  Matlab, PHP, PowerShell, R, TypeScript, Insomnia, Pytorch, Express, Git, Docker, FastAPI, Firebase, MongoDB,
  Cypress, Flask, Postman, Vue,
} from '../../assets/logos';

const CategorySkill = ({ skill }) => {
  const icons = {
    'HTML': HTML,
    'CSS': CSS,
    'JavaScript': JavaScript,
    'Racket': Racket,
    'Java': Java,
    'C': C,
    'Cpp': Cpp,
    'VsCode': VsCode,
    'IntelliJ': IntelliJ,
    'Python': Python,
    'Django': Django,
    'React': React,
    'Node': Node,
    'Laravel': Laravel,
    'Linux': Linux,
    'Matlab': Matlab,
    'PHP': PHP,
    'PowerShell': PowerShell,
    'R': R,
    'TypeScript': TypeScript,
    'Insomnia': Insomnia,
    'Pytorch': Pytorch,
    'Express': Express,
    'Git': Git,
    'Docker': Docker,
    'FastAPI': FastAPI,
    'Firebase': Firebase,
    'MongoDB' : MongoDB,
    'Cypress': Cypress,
    'Flask': Flask,
    'Postman': Postman,
    'Vue': Vue,
  }

  return (
    <>
      <li>
        <div className="itemContainer">
          <img src={icons[skill.icon]} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      </li>
    </>
  );
}

export default CategorySkill;