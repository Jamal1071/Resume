/*
*
* menu.js
* @author - Jamal
* @date - 21 october 2022
*/

import './style.css';
import MenuItem from '../menu-item/menu-item';

function Menu() {
    return (
        <div class="menu">
            <div class="row">
                <div class="cell-1">
                        <MenuItem imgIcon="fa-solid fa-house" url="/" label="Home"/>
                        <MenuItem imgIcon="fa-solid fa-user" url="/about-me" label="About Me"/>
                        <MenuItem imgIcon="fa-solid fa-graduation-cap" url="/resume" label="Resume"/>
                        <MenuItem imgIcon="fa-solid fa-suitcase" url="/portfolio" label="Portfolio"/>
                        <MenuItem imgIcon="fa-solid fa-envelope" url="/contact" label="Contact"/>
                </div>
            </div>
        </div>
    )
}
export default Menu;