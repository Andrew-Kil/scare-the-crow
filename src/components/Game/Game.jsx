import React, { Component } from "react";
import {
  getRandomWord,
  isUserGuessValid,
  isUserGuessRepeated,
  isUserGuessLetter,
  gameDifficultyTypes,
  isUserWinner,
  calculateHpPercent,
  updateStateValidResponse,
  updateStateInvalidResponse
} from "../../utils/utils";
import HpBar from "../HpBar/HpBar";
import Word from "../Word/Word";
import InputGuess from "../InputGuess/InputGuess";
import SelectDifficulty from "../SelectDifficulty/SelectDifficulty";
import DefeatScreen from "../DefeatScreen/DefeatScreen";
import scarecrow from "../../assets/scarecrow.png";
import "./Game.scss";

class Game extends Component {
  state = {
    userWin: false,
    score: 0,
    highScore: localStorage.getItem("highScore") || 0,
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
    this.newGame();
    const newState = gameDifficultyTypes[e.target.value];
    this.setState({ ...newState });
    const settings = Object.entries(newState);
    for (const [setting, value] of settings) {
      localStorage.setItem(setting, value);
    }
  };

  handleSubmit = e => {
    const { userGuess, allGuesses } = this.state;
    !isUserGuessRepeated(userGuess, allGuesses) && e.target.value
      ? this.setState(
          oldState => {
            const { userGuess, secretWord } = oldState;
            return isUserGuessValid(userGuess, secretWord)
              ? updateStateValidResponse(this.state)
              : updateStateInvalidResponse(this.state);
          },
          () => {
            const { secretWord, allGuesses } = this.state;
            if (isUserWinner(secretWord, allGuesses)) {
              this.setState({ userWin: true });
              this.calculateScore();
            }
          }
        )
      : this.setState({ userGuess: "" });
  };

  calculateScore = () => {
    const { score, secretWord } = this.state;
    this.setState({ score: score + secretWord.length }, () => {
      const { score, highScore } = this.state;
      if (score > highScore) {
        this.setState({ highScore: score });
        localStorage.setItem("highScore", score + secretWord.length);
      }
    });
  };

  nextRound = () => {
    const newState = gameDifficultyTypes[this.state.gameDifficulty];
    this.getAndSetSecretWord();
    this.setState({
      ...newState,
      userWin: false,
      allGuesses: [],
      incorrectGuesses: []
    });
  };

  newGame = () => {
    this.nextRound();
    this.setState({ score: 0 });
  };

  render() {
    const {
      userWin,
      score,
      highScore,
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
            <img src={scarecrow} alt="scarecrow" className="scarecrow"></img>
            <Word allGuesses={allGuesses} secretWord={secretWord}></Word>
            <HpBar hpPercent={calculateHpPercent(currentHp, totalHp)}></HpBar>
            <h2 className="hp-text">
              HP: {currentHp}/{totalHp}
            </h2>
            <InputGuess
              userGuess={userGuess}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}></InputGuess>
            <p className="incorrect-guesses-text">
              Incorrect Guesses: {incorrectGuesses.toString()}
            </p>
            <SelectDifficulty
              gameDifficulty={gameDifficulty}
              handleSelectChange={this.handleSelectChange}></SelectDifficulty>
          </div>
        ) : userWin && currentHp ? (
          <div>
            <h1>VICTORY!!!</h1>
            <button onClick={() => this.nextRound()}>Continue?</button>
            <button onClick={() => this.newGame()}>New Game</button>
          </div>
        ) : (
          <DefeatScreen
            secretWord={secretWord}
            newGame={this.newGame}></DefeatScreen>
        )}
        <h1 className="score-text">Score: {score}</h1>
        <h1 className="high-score-text">High Score: {highScore}</h1>
      </div>
    );
  }
}

export default Game;
