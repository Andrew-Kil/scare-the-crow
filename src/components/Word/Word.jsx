import React from "react";

const Word = props => {
  return (
    <div>
      <div>
        {[...props.secretWord].map(letter =>
          props.allGuesses.includes(letter) ? letter : " _ "
        )}
      </div>
    </div>
  );
};

export default Word;
