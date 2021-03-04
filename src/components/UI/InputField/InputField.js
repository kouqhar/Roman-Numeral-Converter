import React from "react";

import Aux from "../../../hoc/Layout/Aux/Aux";

const inputField = ({
  inputValue,
  inputChange,
  inputType,
  inputPlaceholder,
  label,
  btnClicked,
}) => (
  <Aux>
    <label>{label}</label>
    <div>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputChange}
      />
      <button type="submit" onClick={btnClicked}>
        Convert
      </button>
    </div>
  </Aux>
);

export default inputField;
