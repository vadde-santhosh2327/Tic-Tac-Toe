import React, { useState } from "react";
import "../../src/style.css"
export default function Tictac() {
    const [board, setBoard] = useState(Array(9).fill('-')); 
    const [isXNext, setIsXNext] = useState(true); 
    function handleClick(index) {
        if (board[index] !== '-') return;
        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
        checkWinner(newBoard);
    }
    function checkWinner(newBoard) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (newBoard[a] !== '-' && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                alert(`Winner: ${newBoard[a]}`);
                resetBoard();
                return;
            }
        }
        if (!newBoard.includes('-')) {
            alert("It's a draw!");
            resetBoard();
        }
    }
    function resetBoard() {
        setBoard(Array(9).fill('-')); 
        setIsXNext(true); 
    }
    return (
        <>
            <h2 className="game-title">Tic Tac Toe Game</h2>
            <div className="board">
                {board.map((value, index) => (
                    <button key={index} onClick={() => handleClick(index)} className="cell">
                        {value}
                    </button>
                ))}
            </div>
            <p className="turn-info">Next Player: {isXNext ? 'X' : 'O'}</p>
            <button className="reset-btn" onClick={resetBoard}>Reset Game</button>
        </>
    );
}
