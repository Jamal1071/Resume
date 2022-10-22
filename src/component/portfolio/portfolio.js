/*
*
* portfolio.js
* @author - Jamal
* @date - 21 october 2022
*/
import './style.css';
import Title from '../title/title';
import ProjectDetail from '../project-detail/project-detail';

function Portfolio() {
    return (
        <div class="row bg-clr">
            <div class="projects">
                <div class="head-title">
                    <h2>Personal Projects</h2>
                </div>
                    <ProjectDetail ImgIcon="fa-brands fa-github"  title="Fifa 2022" githuburl="https://github.com/Jamal1071/fifa-2022" desc="In this project, created a basic layout and design for homepage of FIFA 2022"/>
                    <ProjectDetail ImgIcon="fa-brands fa-github" title="Virtual Keyboard" githuburl="https://github.com/Jamal1071/Virtual-keyboard" desc="virtual keyboard allow computer use by people with significant mobility impairment.Some virtual keyboards incorporate word prediction to increase" />
                    <ProjectDetail ImgIcon="fa-brands fa-github" title="Calculator" githuburl="https://github.com/Jamal1071/Calculator" desc='Performs arithmetic operations on mumbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculation'/>
                    <ProjectDetail ImgIcon="fa-brands fa-github" title="Counter"  githuburl="https://github.com/Jamal1071/Character-counter" desc="The program increases/ decreases the count in press of increase or decrease button."/>
                    <ProjectDetail ImgIcon="fa-brands fa-github" title="Character counter" githuburl="https://github.com/Jamal1071/Character-counter"  desc="To display the character count typed in textarea."/>
                    <ProjectDetail ImgIcon="fa-brands fa-github" title="Resume" githuburl="https://github.com/Jamal1071/Resume" desc="Created my resume using ReactJS."/>
            </div>
        </div>
    )
}

export default Portfolio;
