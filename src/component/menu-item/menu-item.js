/*
*
* menu-item.js
* @author - Jamal
* @date - 21 october 2022
*/

import './style.css';
import { Link } from 'react-router-dom';
function MenuItem(props) {
    return (
        <ul class="menu-list">
        <li><i class={props.imgIcon}></i><p><Link to={props.url}>{props.label}</Link></p></li>
        </ul>
    )
}
export default MenuItem;