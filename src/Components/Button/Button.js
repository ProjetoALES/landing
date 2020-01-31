import React from "react";

import styles from "./Button.module.scss";

const Button = ({ text, type, kind }) => {
  return (
    <button
      className={`${styles.button} ${styles[kind]}`}
      type={type || "button"}
    >
      {text}
    </button>
  );
};

export default Button;
