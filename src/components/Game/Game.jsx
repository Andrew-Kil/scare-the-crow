import React, { Component } from "react";
import {
  getRandomWord,
  isUserGuessValid,
  gameDifficultyTypes,
  isUserWinner
} from "../../utils/utils";
import HpBar from "../HpBar/HpBar";
import Word from "../Word/Word";
import scarecrow from "../../assets/scarecrow.png";

class Game extends Component {
  state = {
    userWin: false,
    gameDifficulty: "normal",
    totalHp: 6,
    currentHp: 6,
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
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectChange = e => {
    const newState = gameDifficultyTypes[e.target.value];
    this.setState({ ...newState });
    this.startNewGame(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
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
    );
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

  calculateHpPercent = () => {
    const { currentHp, totalHp } = this.state;
    return (currentHp / totalHp) * 100;
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
            <Word allGuesses={allGuesses} secretWord={secretWord}></Word>
            <img src={scarecrow} alt="scarecrow" style={{ width: "25%" }}></img>
            <HpBar hpPercent={this.calculateHpPercent()}></HpBar>
            <h2>
              HP: {currentHp}/{totalHp}
            </h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                Guess a letter:
                <input
                  type="text"
                  value={userGuess}
                  name="userGuess"
                  onChange={this.handleInputChange}
                  autoComplete="off"></input>
              </label>
              <button type="submit" onSubmit={this.handleSubmit}>
                Submit
              </button>
            </form>
            <p>Incorrect Guesses: {incorrectGuesses.toString()}</p>
            <p>All Guesses: {allGuesses.toString()}</p>
            <label>
              Difficulty:{" "}
              <select
                defaultValue={gameDifficulty}
                onChange={this.handleSelectChange}>
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
                <option value="helloween">Helloween</option>
              </select>
            </label>
          </div>
        ) : userWin && currentHp ? (
          <div>
            <h1>VICTORY!!!</h1>
          </div>
        ) : (
          <div>
            <h1>DEFEAT!!!</h1>
            <h3>Secret Word: {secretWord}</h3>
          </div>
        )}
        <div>
          <button onClick={() => this.startNewGame(gameDifficulty)}>
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
