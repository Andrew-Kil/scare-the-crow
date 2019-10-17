import React from "react";
import "./FilledBar.scss";

const FilledBar = props => {
  return (
    <div className="filled-bar" style={{ width: `${props.hpPercent}%` }} />
  );
};

export default FilledBar;
