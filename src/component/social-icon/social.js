/*
*
* social.js
* @author - Jamal
* @date - 21 october 2022
*/
import './style.css';

function SocialIcon(props) {
    return (
        <ul class="icon-list">
            <li><a href={props.genericurl}><i class={props.imgIcon}></i></a></li>
        </ul>
    )
}

export default SocialIcon;