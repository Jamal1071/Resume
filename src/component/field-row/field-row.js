/*
*
* field-row.js
* @author - Jamal
* @date - 21 october 2022
*/

function FieldRow(props){
    return(
        <ul class="info-list">
        <li>{props.label} {props.value}</li>
        </ul>
    )
}
export default FieldRow;