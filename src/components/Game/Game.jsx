import React, { Component } from "react";
import {
  getRandomWord,
  isUserGuessValid,
  isUserGuessRepeated,
  isUserGuessLetter,
  gameDifficultyTypes,
  isUserWinner,
  calculateHpPercent
} from "../../utils/utils";
import HpBar from "../HpBar/HpBar";
import Word from "../Word/Word";
import InputGuess from "../InputGuess/InputGuess";
import SelectDifficulty from "../SelectDifficulty/SelectDifficulty";
import scarecrow from "../../assets/scarecrow.png";
import ghost from "../../assets/ghost.png";
import "./Game.scss";

class Game extends Component {
  state = {
    userWin: false,
    gameDifficulty: localStorage.getItem("gameDifficulty") || "normal",
    totalHp: localStorage.getItem("totalHp") || 6,
    currentHp: localStorage.getItem("currentHp") || 6,
    allGuesses: [],
    incorrectGuesses: [],
    userGuess: "",
    secretWord: ""
  };

  componentDidMount() {
    this.getAndSetSecretWord();
  }

  getAndSetSecretWord = async () => {
    const secretWord = await getRandomWord();
    this.setState({ secretWord });
    console.log(secretWord);
  };

  handleInputChange = e => {
    if (isUserGuessLetter(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value.toLowerCase() });
    }
  };

  handleSelectChange = e => {
    const newState = gameDifficultyTypes[e.target.value];
    this.setState({ ...newState });
    const settings = Object.entries(newState);
    for (const [setting, value] of settings) {
      localStorage.setItem(setting, value);
    }
    this.startNewGame(e.target.value);
  };

  handleSubmit = e => {
    const { userGuess, allGuesses } = this.state;
    !isUserGuessRepeated(userGuess, allGuesses) && e.target.value
      ? this.setState(
          oldState => {
            const {
              currentHp,
              allGuesses,
              incorrectGuesses,
              userGuess,
              secretWord
            } = oldState;
            return isUserGuessValid(userGuess, secretWord)
              ? {
                  allGuesses: [...allGuesses, userGuess],
                  userGuess: ""
                }
              : {
                  currentHp: currentHp - 1,
                  allGuesses: [...allGuesses, userGuess],
                  incorrectGuesses: [...incorrectGuesses, userGuess],
                  userGuess: ""
                };
          },
          () => {
            const { secretWord, allGuesses } = this.state;
            if (isUserWinner(secretWord, allGuesses)) {
              this.setState({ userWin: true });
            }
          }
        )
      : this.setState({ userGuess: "" });
  };

  startNewGame = gameDifficulty => {
    this.getAndSetSecretWord();
    const newState = gameDifficultyTypes[gameDifficulty];
    this.setState({
      ...newState,
      userWin: false,
      allGuesses: [],
      incorrectGuesses: []
    });
  };

  render() {
    const {
      userWin,
      gameDifficulty,
      currentHp,
      allGuesses,
      totalHp,
      incorrectGuesses,
      userGuess,
      secretWord
    } = this.state;
    return (
      <div>
        {!userWin && currentHp ? (
          <div>
            <img src={scarecrow} alt="scarecrow" style={{ width: "25%" }}></img>
            <Word allGuesses={allGuesses} secretWord={secretWord}></Word>
            <HpBar hpPercent={calculateHpPercent(currentHp, totalHp)}></HpBar>
            <h2 className="hp-text">
              HP: {currentHp}/{totalHp}
            </h2>
            <InputGuess
              userGuess={userGuess}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}></InputGuess>
            <p>Incorrect Guesses: {incorrectGuesses.toString()}</p>
            <SelectDifficulty
              gameDifficulty={gameDifficulty}
              handleSelectChange={this.handleSelectChange}></SelectDifficulty>
          </div>
        ) : userWin && currentHp ? (
          <div>
            <h1>VICTORY!!!</h1>
          </div>
        ) : (
          <div>
            <h1 className="defeat-text">DEFEAT!!!</h1>
            <h3>Secret Word: {secretWord}</h3>
            <div class="ghost-container">
              <img className="ghost" src={ghost} alt="scary ghost!"></img>
            </div>
          </div>
        )}
        <div className="new-game-button-container">
          <button onClick={() => this.startNewGame(gameDifficulty)}>
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
