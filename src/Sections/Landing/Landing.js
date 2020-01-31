import React from "react";

import Button from "Components/Button/Button";

import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Projeto Além da Escola</h1>
        <h3 className={styles.subTitle}>
          Aulas extracurriculares aos finais de semana!
        </h3>
        <h3 className={styles.subTitle}>e de graça \o/</h3>
      </div>
      <div className={styles.buttonsContainer}>
        <Button text="Pré-Matrícula" kind="secondary" />
        <Button text="Nossas Matérias" kind="secondary-outline" />
      </div>
    </div>
  );
};

export default Landing;
