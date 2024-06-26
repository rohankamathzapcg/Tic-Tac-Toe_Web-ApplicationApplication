import React, { useState } from 'react';
import circleIcon from '../Assets/circle.png'
import crossIcon from '../Assets/cross.png'
import { ToastContainer, toast } from 'react-toastify';

let data =["","","","","","","","",""];

const TicTacToe = () => {
    
    let [count,setCount]=useState(0);
    let[lock,setLock]=useState(false);

    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img src='${crossIcon}'>`;
            data[num]='X';
            setCount(++count);
        } else {
            e.target.innerHTML=`<img src='${circleIcon}'>`;
            data[num]='O';
            setCount(++count);
        }
        checkWin();
    }

    const checkWin=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
        } else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5])
        } else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8])
        } else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6])
        } else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7])
        } else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8])
        } else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8])
        } else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2])
        } else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6])
        }
    }

    const won=(winner)=>{
        setLock(true);

        if(winner==="X") {
            toast('Hurray X player Wins!!!', {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
            });
        } else {
            toast('Hurray O player Wins!!!', {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
            });
        }

    }

    const handleReset=()=>{
        data =["","","","","","","","",""];
        setLock(false);
        window.location.reload();
    }
  return (
    <>
      <div className='container'>
      <ToastContainer />
        <h1 className='title'>Tic Tac Toe Game</h1>
        <div className='game-board'>
            <div className='row1'>
                <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,1)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className='row2'>
                <div className='boxes' onClick={(e)=>{toggle(e,3)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,4)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className='row3'>
                <div className='boxes' onClick={(e)=>{toggle(e,6)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,7)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={()=>handleReset()}>Reset</button>
      </div>
    </>
  );
}

export default TicTacToe;
