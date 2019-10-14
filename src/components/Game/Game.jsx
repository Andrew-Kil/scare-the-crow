import React, { Component } from "react";
import { getRandomWord, isUserInputValid } from "../../utils/utils";
import Word from "../Word/Word";

class Game extends Component {
  state = {
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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

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

  startNewGame = () => {
    this.setSecretWord();
    this.setState({
      guessesRemaining: 6,
      allGuesses: [],
      incorrectGuesses: []
    });
  };

  render() {
    const {
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
                  onChange={this.handleChange}
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
          </div>
        ) : (
          <div>
            <h1>GAME OVER!!!</h1>
            <button onClick={this.startNewGame}>New Game</button>
          </div>
        )}
      </div>
    );
  }
}

export default Game;
