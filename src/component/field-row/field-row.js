/*
*
* field-row.js
* @author - Jamal
* @date - 21 october 2022
*/
import './style.css';

function FieldRow(props) {
    return (
        <ul class="field-row">
            <li>{props.label} {props.value}</li>
        </ul>
    )
}

export default FieldRow;