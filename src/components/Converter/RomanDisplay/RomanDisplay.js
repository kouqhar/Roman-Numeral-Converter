import React from "react";
import styles from "./RomanDisplay.module.css";

const romanDisplay = ({ romanNumeral, value }) => {
  if (romanNumeral === "" || (romanNumeral && value === ""))
    romanNumeral = "Roman Numeral";

  return (
    <div className={styles.RomanNumeral}>
      <p>{romanNumeral}</p>
    </div>
  );
};

export default romanDisplay;
