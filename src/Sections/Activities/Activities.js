import React from "react";

import SnackCard from "Components/SnackCard/SnackCard";
import styles from "./Activities.module.scss";

const Activities = () => {
  return (
    <div className={styles.activitiesContainer}>
      <h3>Que atividades oferecemos?</h3>
      <div>
        <p>Oferecemos um vasto leque de aulas:</p>
        <div className={styles.cardsContainer}>
          <SnackCard text="Programação" kind="secondary" />
          <SnackCard text="Robótica" kind="secondary" />
          <SnackCard text="Desenho" kind="secondary" />
          <SnackCard text="Teatro" kind="secondary" />
          <SnackCard text="Ciências" kind="secondary" />
          <SnackCard text="Humanidades" kind="secondary" />
        </div>
        <p>
          <a
            href="https://projetoales.com.br/simulate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            e muito mais!
          </a>
        </p>
      </div>
      <div>
        <p>E outras atividades:</p>
        <div className={styles.cardsContainer}>
          <SnackCard text="UPA" kind="primary-darker" />
          <SnackCard text="Hackathons" kind="primary-darker" />
          <SnackCard text="MUPA" kind="primary-darker" />
        </div>
      </div>
    </div>
  );
};

export default Activities;
