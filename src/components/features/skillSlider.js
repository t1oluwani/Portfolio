import '../styling/skills.css'
import { useState, useEffect } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

import {
  HTML, CSS, JavaScript, Racket, Java, C, Cpp, VsCode, IntelliJ, Python, Django,
  React, Node, Laravel, Linux, Matlab, PHP, PowerShell, R, TypeScript, Insomnia, Pytorch, Express, Git,
} from '../../assets/logos';


function SkillSlider() {
  const [manual, setManual] = useState(false);
  const [slide, setSlide] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setSlide(slide - 1);
    } else {
      setSlide(slide + 1);
    }
    setManual(true)
  }

  // Makes the carousel manual when clicked (automatic off)
  useEffect(() => {
    if (!manual) {
      const interval = setInterval(() => {
        setSlide((prevSlide) => (prevSlide + 1));
      }, 1500); 

      return () => clearInterval(interval);
    }
  }, [manual]);

  // Turns the carousel back to automatic after 5 seconds of not clicking
  useEffect(() => {
    const interval = setInterval(() => {
      setManual(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [manual]);


  return (
    <div className="skillSlider">

      <div className="skillSlider__container">

        <BsArrowLeftCircle className="arrow left" onClick={() => handleArrowClick('left')} />

        <div className={(slide % 3) === 0 ? 'skillsCategory' : 'skillsCategory hidden'}>

          <h3>Languages</h3>
          <ul className="skillsGrid">
            {/* HTML */}
            <li>
              <div className="itemContainer">
                <img alt="HTML" src={HTML} />
                <p>HTML</p>
              </div>
            </li>
            {/* CSS */}
            <li>
              <div className="itemContainer">
                <img alt="CSS" src={CSS} />
                <p>CSS</p>
              </div>
            </li>
            {/* JavaScript */}
            <li>
              <div className="itemContainer">
                <img alt="JavaScript" src={JavaScript} />
                <p>JavaScript</p>
              </div>
            </li>
            {/* TypeScript */}
            <li>
              <div className="itemContainer">
                <img alt="TypeScript" src={TypeScript} />
                <p>TypeScript</p>
              </div>
            </li>
            {/* Python */}
            <li>
              <div className="itemContainer">
                <img alt="Python" src={Python} />
                <p>Python</p>
              </div>
            </li>
            {/* Java */}
            <li>
              <div className="itemContainer">
                <img alt="Java" src={Java} />
                <p>Java</p>
              </div>
            </li>
            {/* PHP */}
            <li>
              <div className="itemContainer">
                <img alt="PHP" src={PHP} />
                <p>PHP</p>
              </div>
            </li>
            {/* C */}
            <li>
              <div className="itemContainer">
                <img alt="C" src={C} />
                <p>C</p>
              </div>
            </li>
            {/* C++ */}
            <li>
              <div className="itemContainer">
                <img alt="C++" src={Cpp} />
                <p>C++</p>
              </div>
            </li>
            {/* Racket */}
            <li>
              <div className="itemContainer">
                <img alt="Racket" src={Racket} />
                <p>Racket</p>
              </div>
            </li>
          </ul>
        </div>


        <div className={(slide % 3) === 1 ? 'skillsCategory' : 'skillsCategory hidden'}>
          <h3>Tools</h3>
          <ul className="skillsGrid">
            {/* VS Code */}
            <li>
              <div className="itemContainer">
                <img alt="VS Code" src={VsCode} />
                <p>VS Code</p>
              </div>
            </li>
            {/* IntelliJ IDEA */}
            <li>
              <div className="itemContainer">
                <img alt="IntelliJ IDEA" src={IntelliJ} />
                <p>IntelliJ IDEA</p>
              </div>
            </li>
            {/* Linux */}
            <li>
              <div className="itemContainer">
                <img alt="Linux" src={Linux} />
                <p>Linux</p>
              </div>
            </li>
            {/* Insomnia */}
            <li>
              <div className="itemContainer">
                <img alt="Insomnia" src={Insomnia} />
                <p>Insomnia</p>
              </div>
            </li>
            {/* PowerShell */}
            <li>
              <div className="itemContainer">
                <img alt="PowerShell" src={PowerShell} />
                <p>PowerShell</p>
              </div>
            </li>
            {/* MATLAB */}
            <li>
              <div className="itemContainer">
                <img alt="MATLAB" src={Matlab} />
                <p>MATLAB</p>
              </div>
            </li>
            {/* RStudio */}
            <li>
              <div className="itemContainer">
                <img alt="RStudio" src={R} />
                <p>RStudio</p>
              </div>
            </li>
            {/* Pytorch */}
            <li>
              <div className="itemContainer">
                <img alt="PyTorch" src={Pytorch} />
                <p>PyTorch</p>
              </div>
            </li>
            {/* Git */}
            <li>
              <div className="itemContainer">
                <img alt="GIt" src={Git} />
                <p>Git</p>
              </div>
            </li>
          </ul>
        </div>


        <div className={(slide % 3) === 2 ? 'skillsCategory' : 'skillsCategory hidden'}>
          <h3>Frameworks</h3>
          <ul className="skillsGrid">
            {/* NodeJs */}
            <li>
              <div className="itemContainer">
                <img alt="NodeJs" src={Node} />
                <p>NodeJs</p>
              </div>
            </li>
            {/* Laravel */}
            <li>
              <div className="itemContainer">
                <img alt="Laravel" src={Laravel} />
                <p>Laravel</p>
              </div>
            </li>
            {/* Django */}
            <li>
              <div className="itemContainer">
                <img alt="Django" src={Django} />
                <p>Django</p>
              </div>
            </li>
            {/* ReactJS */}
            <li>
              <div className="itemContainer">
                <img alt="ReactJS" src={React} />
                <p>ReactJS</p>
              </div>
            </li>
            {/* ExpressJs */}
            <li>
              <div className="itemContainer">
                <img alt="ExpressJs" src={Express} />
                <p>ExpressJs</p>
              </div>
            </li>
          </ul>
        </div>

        <BsArrowRightCircle className="arrow right" onClick={() => handleArrowClick('right')} />

        <span className='indicators'>
          <button className={(slide % 3) === 0 ? "indicating" : "indicator"} onClick={() => setSlide(0)}></button>
          <button className={(slide % 3) === 1 ? "indicating" : "indicator"} onClick={() => setSlide(1)}></button>
          <button className={(slide % 3) === 2 ? "indicating" : "indicator"} onClick={() => setSlide(2)}></button>
        </span>

      </div>


    </div>
  )
}

export default SkillSlider