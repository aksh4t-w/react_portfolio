import React from 'react'
import '../css/Skills.css'

const Skills = ({skills}) => {
    return (
        <div className="skills" id="skills">
            <h1>SKILLS</h1>
            <div className="skills__container">
                {skills.map(skill => (
                    <div className="skills__bar">
                        <li style={{width: skill.level}}>
                            <span>{skill.name}</span>
                        </li>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
