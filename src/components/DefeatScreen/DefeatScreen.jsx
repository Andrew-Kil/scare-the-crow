import React from "react";
import defeatGhost from "../../assets/defeat-ghost.png";
import "./DefeatScreen.scss";

const DefeatScreen = props => {
  return (
    <div>
      <img className="ghost" src={defeatGhost} alt="defeat ghost"></img>
      <h1 className="defeat-text">DEFEAT!!!</h1>
      <h3>Secret Word: {props.secretWord}</h3>
      <div className="new-game-button-container">
        <button onClick={() => props.newGame()}>New Game</button>
      </div>
    </div>
  );
};

export default DefeatScreen;
