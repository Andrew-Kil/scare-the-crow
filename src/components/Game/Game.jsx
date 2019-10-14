import React, { Component } from "react";
import {
  getRandomWord,
  isUserInputValid,
  gameDifficultyTypes
} from "../../utils/utils";
import Word from "../Word/Word";

class Game extends Component {
  state = {
    gameDifficulty: "normal",
    guessesRemaining: 6,
    allGuesses: [],
    incorrectGuesses: [],
    userInput: "",
    secretWord: ""
  };

  componentDidMount() {
    this.setSecretWord();
  }

  setSecretWord = async () => {
    const secretWord = await getRandomWord();
    this.setState({ secretWord });
    console.log(secretWord);
  };

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSelectChange = e => {
    const newState = gameDifficultyTypes[e.target.value];
    this.setState({ ...newState });
    this.startNewGame();
  };

  handleSubmit = e => {
    const {
      guessesRemaining,
      allGuesses,
      incorrectGuesses,
      userInput,
      secretWord
    } = this.state;
    e.preventDefault();
    if (isUserInputValid(userInput, secretWord)) {
      this.setState({
        allGuesses: [...allGuesses, userInput],
        userInput: ""
      });
    } else {
      this.setState({
        guessesRemaining: guessesRemaining - 1,
        allGuesses: [...allGuesses, userInput],
        incorrectGuesses: [...incorrectGuesses, userInput],
        userInput: ""
      });
    }
  };

  startNewGame = gameDifficulty => {
    this.setSecretWord();
    const newState = gameDifficultyTypes[gameDifficulty];
    this.setState({
      ...newState,
      allGuesses: [],
      incorrectGuesses: []
    });
  };

  render() {
    const {
      gameDifficulty,
      guessesRemaining,
      allGuesses,
      incorrectGuesses,
      userInput,
      secretWord
    } = this.state;
    return (
      <div>
        {guessesRemaining ? (
          <div>
            <Word allGuesses={allGuesses} secretWord={secretWord}></Word>
            <form onSubmit={this.handleSubmit}>
              <label>
                Guess a letter:
                <input
                  type="text"
                  value={userInput}
                  name="userInput"
                  onChange={this.handleInputChange}
                  autoComplete="off"></input>
              </label>
              <button type="submit" onSubmit={this.handleSubmit}>
                Submit
              </button>
            </form>
            <h2>HP: {guessesRemaining}</h2>
            {incorrectGuesses.length ? (
              <p>Incorrect Guesses: {incorrectGuesses.toString()}</p>
            ) : (
              ""
            )}
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
        ) : (
          <div>
            <h1>GAME OVER!!!</h1>
          </div>
        )}
        <button onClick={() => this.startNewGame(gameDifficulty)}>
          New Game
        </button>
      </div>
    );
  }
}

export default Game;
