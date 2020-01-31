import React from "react";

import ProecLogo from "assets/images/proec.png";
import UnicampLogo from "assets/images/unicamp-logo.png";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h3>Sobre Nós</h3>
      <div className={styles.contentContainer}>
        <div className={styles.dataContainer}>
          <h4>+ 500 Alunos</h4>
          <h4>+ 25 Matérias Diferentes</h4>
          <h4>+ 30 Escolas de Campinas</h4>
        </div>
        <div className={styles.sponsorshipContainer}>
          <h4>Apoiado por:</h4>
          <div className={styles.logosContainer}>
            <img src={ProecLogo} height={60} width={140} alt="proec-logo" />
            <img src={UnicampLogo} height={90} width={85} alt="unicamp-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
