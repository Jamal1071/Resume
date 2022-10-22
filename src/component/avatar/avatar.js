/*
*
* avatar.js
* @author - Jamal
* @date - 21 october 2022
*/
import './style.css';

function Avatar(props) {
    return (
        <div class='avatar'>
            <img src={props.pic} alt="profile-picture" width={174} />
        </div>
    )
}

export default Avatar;