import React from "react";
import "./Button.css";
function Button(props) {
  const handleClick = props.onDelete ? props.onDelete : () => {};
  return (
    <React.Fragment>
      <button className="btn" onClick={handleClick}>
        {props.value}
      </button>
    </React.Fragment>
  );
}

export default Button;
