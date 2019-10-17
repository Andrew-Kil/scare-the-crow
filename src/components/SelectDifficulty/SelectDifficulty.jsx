import React from "react";
import "./SelectDifficulty.scss";

const SelectDifficulty = props => {
  return (
    <>
      <label>
        Difficulty:{" "}
        <select
          defaultValue={props.gameDifficulty}
          onChange={props.handleSelectChange}>
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
          <option value="helloween">Helloween</option>
        </select>
      </label>
    </>
  );
};

export default SelectDifficulty;
