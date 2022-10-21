/*
*
* profile.js
* @author - Jamal
* @date - 21 october 2022
*/

import './style.css';
import Title from '../title/title';
import Img from "../../assets/photo.jpeg"
import Avatar from '../avatar/avatar';
import SocialIcon from '../social-icon/social';


function Profile() {
    return (
        <div class="profile">
            <div class='cell-1'>
                <div class='header-content'>
                <Avatar pic={Img} />
                    <div className='header-title'>
                        <Title label="Mohamed Jamal"/>
                        <h4>Front-end Developer</h4>
                    </div>
                    <div className='row'>
                    <SocialIcon imgIcon="fa-brands fa-linkedin" genericurl="https://www.linkedin.com/in/mohamed-jamaludeen-948841139/" />
                    <SocialIcon imgIcon="fa-brands fa-github" genericurl="https://github.com/Jamal1071" />
                    </div>
                    
                    <div class="btn-container">
                        <button class="primary-btn">Download CV</button>
                    </div>
                </div>
                <p class="mt-410 p-clr">© 2022 All rights reserved.</p>
            </div>
        </div>
    )
}
export default Profile;
