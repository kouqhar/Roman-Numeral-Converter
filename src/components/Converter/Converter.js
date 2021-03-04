import React from "react";

import InputField from "../UI/InputField/InputField";
import RomanDisplay from "./RomanDisplay/RomanDisplay";

import styles from "./Converter.module.css";

const converter = ({ value, change, numeral, clicked }) => {
  let inputBorder = [styles.inputSection, styles.romanNumeral, styles.Red];
  if (value !== "" && value > 0)
    inputBorder = [styles.inputSection, styles.romanNumeral, styles.Green];
  return (
    <div className={styles.ConverterContainer}>
      <div className={styles.ConverterContent}>
        <div className={inputBorder.join(" ")}>
          <h4>{value}</h4>
          <RomanDisplay romanNumeral={numeral} value={value} />
        </div>

        <div className={styles.inputSections}>
          <InputField
            label="Enter your number : "
            inputType="number"
            inputPlaceholder="Enter Number to convert..."
            inputValue={value}
            inputChange={change}
            btnClicked={clicked}
          />
        </div>
      </div>
    </div>
  );
};

export default converter;
