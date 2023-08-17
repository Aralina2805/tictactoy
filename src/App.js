
import './App.css';
import {useEffect, useState} from "react";
import Board from "./Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gamerX, setGamerX]=useState(true);
  const [winner, setwinner]= useState(null);
  const [draw, setDraw]=useState(false)
  const handleMove=(ind)=>{
    if (board[ind] == null) {
      const nextGamer = gamerX ? "X" : "O";
      const newBoard = board.map((el, index) => ind === index ? nextGamer : el)
      setBoard(newBoard)
      setGamerX(!gamerX)
        checkWinner(winner)
    }
  }
  const winnerVariant=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8]
  ]
const checkWinner =()=>{
    let currentWinner=null;
      for(let i=0; i<winnerVariant.length; i++){
          const[a,b,c] =winnerVariant[i]

          if(board[a]===board[b]&& board[b]===board[c] && board[a]!==null){
              setwinner(board[a]);
              currentWinner= board[a]
          }

          }
    checkDraw(currentWinner)
      }


    const checkDraw=(currentWinner)=>{
        const filtered=board.filter((el)=>el==null)
        if(!filtered.length && !currentWinner){
        setDraw(!draw)
        }
}
useEffect(()=>{
    checkWinner()

}, [board])

    const restart=()=>{
      setBoard(Array(9).fill(null));
      setwinner(null);
      setGamerX(true);
      setDraw(false);
     // window.location.reload();

    }
  return (
    <div className="App">
      <h1>Tik Tak Toe Game</h1>
    <Board
        board={board}
        handleMove={handleMove}
        winner={winner}
    />
        {winner && <h2>Congratulation!  Winner is {winner} !!!</h2>}
        {draw && <h2> Draw!</h2>}
        {(draw || winner) &&<button onClick={restart}>restart</button>}


    </div>
  );
}

export default App;
