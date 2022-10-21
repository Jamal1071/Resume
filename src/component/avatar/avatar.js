/*
*
* avatar.js
* @author - Jamal
* @date - 21 october 2022
*/

function Avatar(props){
    return (
    <div class='header-photo'>
    <img src={props.pic} alt="profile-picture" width={174} />
    </div>
    )
}
export default Avatar;