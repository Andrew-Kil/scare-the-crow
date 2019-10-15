import React from "react";
import FilledBar from "./FilledBar/FilledBar";
import "./HpBar.scss";

const HpBar = props => {
  return (
    <div className="hp-bar">
      <FilledBar hpPercent={props.hpPercent} />
    </div>
  );
};

export default HpBar;
