import React from "react";
import styles from "./Footer.module.css";

const footer = (props) => {
  const social = {
    twitter: "https://twitter.com/kouqhar",
    portfolio: "https://naphtaliduniya.netlify.app/",
  };
  return (
    <div className={styles.Footer}>
      <p>
        Copyright &copy; <small> MMXXI ({new Date().getFullYear()})</small>,
        made by{" "}
        <a href={social.portfolio} target="_blank" rel="noreferrer noopener">
          <abbr title="Naphtali Duniya">Kouqhar</abbr>
        </a>
      </p>
    </div>
  );
};

export default footer;
