import React from "react";
import victoryGhost from "../../assets/victory-ghost.png";
import "./VictoryScreen.scss";

const VictoryScreen = props => {
  return (
    <div>
      <img className="ghost" src={victoryGhost} alt="victory ghost"></img>
      <h1 className="victory-text">VICTORY!!!</h1>
      <h3>Secret Word: {props.secretWord}</h3>
      <div className="next-round-button-continer">
        <button onClick={() => props.nextRound()}>Continue?</button>
      </div>
      <div className="new-game-button-container">
        <button onClick={() => props.newGame()}>New Game</button>
      </div>
    </div>
  );
};

export default VictoryScreen;
