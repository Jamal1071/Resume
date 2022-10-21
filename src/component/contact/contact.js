/*
*
* contact.js
* @author - Jamal
* @date - 21 october 2022
*/

import Card from '../card/card';
import './style.css';

function Contact() {
    return (
        <div class="cell-1 bg-clr">
            <div class="contact">
                <h2>Contact</h2>
                <div class="row">
                        <Card imgIcon="fa-solid fa-location-dot" title="Chennai"/>
                        <Card imgIcon="fa-solid fa-phone" title="7530076600"/>
                        <Card imgIcon="fa-solid fa-envelope" title="mohamedjamal6465@gmail.com"/>
                </div>
            </div>
        </div>
    )
}
export default Contact;