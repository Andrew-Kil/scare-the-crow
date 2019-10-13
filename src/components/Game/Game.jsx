import React, { Component } from "react";

class Game extends Component {
  state = {
    guessesRemaining: 6,
    incorrectGuesses: [],
    userInput: "",
    secretWord: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const { guessesRemaining, userInput, incorrectGuesses } = this.state;
    e.preventDefault();
    this.setState({
      guessesRemaining: guessesRemaining - 1,
      incorrectGuesses: [...incorrectGuesses, userInput],
      userInput: ""
    });
  };

  render() {
    const { guessesRemaining, userInput, incorrectGuesses } = this.state;
    return (
      <div>
        {guessesRemaining ? (
          <div>
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
          <h1>GAME OVER!!!</h1>
        )}
      </div>
    );
  }
}

export default Game;
