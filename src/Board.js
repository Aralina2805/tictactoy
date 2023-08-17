import React from 'react';
import Square from "./Square";
const style ={
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '300px',
  height: '300px',
  margin: '0 auto',
  display : 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}
const Board = (props) => {
    return (
        <div style = {style}>
            {props.board.map((el,index)=><Square handleMove={props.handleMove}
                                         value={el}
                                         index={index}
                                         winner={props.winner}
            />)}

        </div>
    );
};

export default Board;