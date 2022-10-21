/*
*
* project-detail.js
* @author - Jamal
* @date - 21 october 2022
*/

import './style.css';

function ProjectDetail(props) {
    return (
        <div class="project">
            <div class="title-project">
                <h3>{props.title}</h3>
                <ul class="info-project">
                    <li>{props.desc}</li>
                    <li><i class={props.ImgIcon}></i><a href={props.githuburl}>{props.githuburl}</a></li>
                </ul>
            </div>
        </div>    
    )
}
export default ProjectDetail;