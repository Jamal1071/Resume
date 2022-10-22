/*
*
* card.js
* @author - Jamal
* @date - 21 october 2022
*/
import './style.css';

function Card(props) {
    return (
        <div class="card">
            <i class={props.imgIcon}></i>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Card;