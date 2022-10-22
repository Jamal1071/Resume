/*
*
* resume.js
* @author - Jamal
* @date - 21 october 2022
*/

import './style.css';
import Title from '../title/title';
import Chip from '../chip/chip';

function Resume() {
    return (
        <div class="cell-1 bg-clr">
            <div class="title-resume">
                <Title label="Resume"/>
                <h3>Education</h3>
            </div>
            <div class="row">
                <div class="cell-1">
                    <div class="row">
                        <div class="cell-1">
                            <div class="info">
                                <h5>2016</h5>
                                <span class="title-company">Crescent school</span>
                            </div>
                        </div>
                        <div class="cell-1">
                            <div class="skill-section">
                                <h4>Science</h4>
                                <p>The Board offers two options for science students. One is PCB which includes subjects such as Physics, Chemistry and Biology. PCM is the other one which has Physics, Chemistry and Mathematics as major subjects. Preparing for the examination, students require to put more hard work and a solid plan of action.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell-1">
                            <div class="info">
                                <h5>2020</h5>
                                <span class="title-company">Crescent University</span>
                            </div>
                        </div>
                        <div class="cell-1">
                            <div class="skill-section">
                                <h4>Computer Science</h4>
                                <p>Computer science is a broad field that encompasses everything from computer systems and networks to cybersecurity. Computer scientists may work as software developers, computer systems analysts, database administrators, or other careers related to the way software systems operate.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cell-1">
                    <div class="skills-list">
                        <h3>Skills</h3>
                        <ul class="skills">
                            <Chip skill="HTML"/>
                            <Chip skill="CSS"/>
                            <Chip skill="Javascript (Basic)"/>
                            <Chip skill="ReactJS (Basic)"/>
                            <Chip skill="Phyton"/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;