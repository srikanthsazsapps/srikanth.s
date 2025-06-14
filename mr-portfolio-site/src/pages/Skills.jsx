import React from 'react';
import './Skills.css';
const skills = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 65 },
  { name: 'React', level: 80 },
  { name: 'MySql', level: 50 },
  { name: '', level: 0 },
];

function Skills() {
  const leftSkills = skills.slice(0, 3);
  const rightSkills = skills.slice(3);

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
         Driven by passion and guided by purpose — turning ideas into impactful digital experiences.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content">
          {/* Left Column */}
          <div className="col-lg-6">
            {leftSkills.map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            {rightSkills.map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
