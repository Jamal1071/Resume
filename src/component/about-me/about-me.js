/*
*
* about-me.js
* @author - Jamal
* @date - 21 october 2022
*/

import Title from '../title/title';
import './style.css';
import FieldRow from '../field-row/field-row';
function AboutMe() {
    return (
        <div class="cell-1 bg-clr">
            <div class="about-me">
                <Title label="About Me" />
                <div class="row">
                    <div class="cell-1">
                        <p class="subtitle">
                            An enthusiastic engineering fresher who is a self-starter and capable to use technical skills for the
                            betterment of the organization. Software Engineering has enhanced my proficiency in developing web
                            applications and looking forward to work in a competitive environment that enhances overall learning.
                        </p>
                    </div>
                    <div class="cell-1">
                        <ul class="info-list">
                            <li><span class="title">Age </span><span class="value">24</span></li>
                            <li><span class="title">Residence </span><span class="value">Chennai</span></li>
                            <li><span class="title">Address </span><span class="value">Chennai, India</span></li>
                            <li><span class="title">e-mail </span><span class="value">mohamedjamal6465@gmail.com</span></li>
                            <li><span class="title">Phone </span><span class="value">+91 7530076600</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;