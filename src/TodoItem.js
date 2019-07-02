import React from 'react';
import ReactDOM from 'react-dom'

function todoItem(props){
    return(
        <div class="d-flex">
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}
         />
            <p>{props.item.text}</p>
        </div>
    )
}


export default todoItem