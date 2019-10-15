import React from "react";
import "./Word.scss";

const Word = props => {
  return (
    <div>
      <div className="secret-word">
        {[...props.secretWord].map(letter =>
          props.allGuesses.includes(letter) ? letter : " _ "
        )}
      </div>
    </div>
  );
};

export default Word;
