import React from "react";

import styles from "./SnackCard.module.scss";

const SnackCard = ({ text, kind }) => {
  return (
    <div className={`${styles.snackCardContainer} ${styles[kind]}`}>{text}</div>
  );
};

export default SnackCard;
