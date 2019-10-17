import React from "react";

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
          onKeyUp={props.handleSubmit}
          style={{ width: "20px" }}></input>
      </label>
    </>
  );
};

export default InputGuess;
