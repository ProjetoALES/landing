import React from "react";

import styles from "./Button.module.scss";

const Button = ({ text, type, kind, to }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <button
        className={`${styles.button} ${styles[kind]}`}
        type={type || "button"}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
