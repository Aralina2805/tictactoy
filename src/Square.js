import React from 'react';
import board from "./Board";
const squareStyle ={
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
}

const onClickButton =(props)=>{
    console.log(props)
}
const Square = (props) => {
    return (
        <button style={squareStyle} disabled={props.winner} onClick={(index)=>props.handleMove(props.index)}
        >
            {props.value}
        </button>
    );
};

export default Square;