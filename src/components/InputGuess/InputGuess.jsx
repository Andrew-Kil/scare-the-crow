import React from "react";
import "./InputGuess.scss";

const InputGuess = props => {
  return (
    <>
      <label>
        Guess a letter:
        <input
          type="text"
          value={props.userGuess}
          maxLength="1"
          name="userGuess"
          onChange={props.handleInputChange}
          autoComplete="off"
          autoFocus={true}
          onKeyUp={props.handleSubmit}></input>
      </label>
    </>
  );
};

export default InputGuess;
