import React from 'react';
import ReactDOM from 'react-dom'


function Joke(props){
    return(
        <div>
            <h3 style={{display : props.question ? "block" : "none"}}> Question: {props.question}</h3>
            <h3 style={{color : props.question ? "red" : "green"}}>Answer: {props.answer}</h3>
            <hr />
        </div>
    )
}

export default Joke