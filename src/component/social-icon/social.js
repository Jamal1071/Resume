/*
*
* social.js
* @author - Jamal
* @date - 21 october 2022
*/

function SocialIcon(props) {
    return (
        <div class="icon">
        <ul class="icon-list">
            <li><a href={props. genericurl}><i class={props.imgIcon}></i></a></li>
        </ul>
    </div>
    )
}
export default SocialIcon;