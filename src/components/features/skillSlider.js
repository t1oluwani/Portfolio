import '../styling/skills.css'
import { useState, useEffect } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import CategorySkill from './categorySkill.js'
import skillData from '../../assets/data/skillsData.json'

function SkillSlider() {
  const [manual, setManual] = useState(false);
  const [slide, setSlide] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setSlide(slide + 2);
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
      }, 5000);

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

        {skillData.map((category, idx) => {
          const sortedSkills = (metric) => {
            return category.skills.sort((a, b) => {
              if (metric === 'len') {
                return a.name.length - b.name.length;
              } else if (metric === 'alpha') {
                return a.name.localeCompare(b.name);
              }
              return 0;
            });
          };
          

          return (
            <div key={idx} className={(slide % 3) === category.visibleWhenSlide ? 'skillsCategory' : 'skillsCategory hidden'}>
              <h3>{category.title}</h3>
              <ul className="skillsGrid">
                {sortedSkills("len").map((skill, idx) => {
                  return (
                    <CategorySkill key={idx} skill={skill} />
                  )
                })}
              </ul>
            </div>
          )
        })}

        <BsArrowRightCircle className="arrow right" onClick={() => handleArrowClick('right')} />

        <span className='indicators'>
          <button className={(slide % 3) === 0 ? "indicating" : "indicator"} onClick={() => setSlide(0)}></button>
          <button className={(slide % 3) === 1 ? "indicating" : "indicator"} onClick={() => setSlide(1)}></button>
          <button className={(slide % 3) === 2 ? "indicating" : "indicator"} onClick={() => setSlide(2)}></button>
        </span>

      </div>
    </div >
  )
}

export default SkillSlider